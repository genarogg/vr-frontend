import React from "react"
import Buttons from "./components/Buttons"

import $, { $toggle, $classList } from "../../../../../functions/$"
import Icono from "../../../../nano/Icono"

import RedesLogin from "./components/RedesLogin"

import check from "../functions/check"

import Input from "./components/Input"
import focus from "../functions/focus"
const Login = () => {
  const submit = e => {
    e.preventDefault()
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

    $toggle("checkRemember", "icon-check-square")
    $toggle("checkRemember", "icon-plus-square")
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
            icono="icon-https"
          />
          {/* <RedesLogin /> */}

          <div
            className="checkBoxContainer"
            onClick={() => {
              remerberme()
            }}
          >
            <Icono css="icon-plus-square" id="checkRemember" />
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
