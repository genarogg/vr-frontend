import React, { useContext } from "react"


//@ts-ignore
import Buttons from "./components/Buttons"

import $, { $toggle, $classList } from "../../../../../functions/$"
import Icono from "../../../../nano/Icono"
//@ts-ignore
/* import RedesLogin from "./components/RedesLogin" */
//@ts-ignore
import check from "../functions/check"
//@ts-ignore
import Input from "./components/Input"
//@ts-ignore
import focus from "../functions/focus"

import AuthContext from "../../../../../context/autenticacion/authContext"

const Login = () => {
  const authContext = useContext(AuthContext)
  const { iniciarSesion } = authContext

  const submit = e => {
    e.preventDefault()
    const email = $("loginCorreo").value.toLowerCase()
    const password = $("loginPassword").value

    const data = {
      email,
      password,
    }

    iniciarSesion(data)
  }

  /* Voltea la tarjeta para recuperar la contraseña */
  const voltearRecuperar = () => {
    const tarjetas = $("containerRegisterLogin")

    if (!tarjetas.classList.contains("activeLeft")) {
      tarjetas.classList.add("activeLeft")
      $("buttonBack").classList.add("active")
    }

    $classList("traseraIzq").add("tarjetaFocus")

    setTimeout(() => {
      $classList("traseraIzq").remove("tarjetaFocus")
    }, 1500)
  }

  /* cambia el color del check de remember */
  const remerberme = () => {
    $toggle("checkRemember", "active")

    $toggle("checkRemember", "icon-checkbox-unchecked")
    $toggle("checkRemember", "icon-checkbox-checked")
  }

  return (
    <>
      <div
        className="front formGroupSesion"
        id="front"
        onClick={() => {
          focus()
        }}
      >
        <Buttons />
        <form>
          <Input
            type="email"
            id="loginCorreo"
            placeholder="Correo electrónico"
            icono="icon-mail"
            next="loginPassword"
          />
          <Input
            type="password"
            id="loginPassword"
            placeholder="Contraseña"
            icono="icon-lock"
          />
          {/* <RedesLogin /> */}

          <div
            className="checkBoxContainer"
            onClick={() => {
              remerberme()
            }}
          >
            <Icono css="icon-checkbox-unchecked" id="checkRemember" />
            <label htmlFor="checkRemember" id="checkRememberLabel">
              <p>Mantener sesion</p>
            </label>
          </div>

          <div className="buttonContainer">
            <button
              className="login submit"
              name="loginButton"
              id="loginButton"
              type="submit"
              value="send"
              onClick={e => {
                check("login")
                submit(e)
              }}
            >
              Acceder
            </button>
          </div>

          <div className="forgotPasswordContainer ">
            <button
              type="button"
              className="registrarse link"
              onClick={() => {
                voltearRecuperar()
              }}
            >
              <p>¿Olvidaste tu contraseña?</p>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
