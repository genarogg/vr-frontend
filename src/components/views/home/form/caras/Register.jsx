import React, { useState } from "react"

import A from "../../../../nano/A"

import Buttons from "./components/Buttons"
import RedesLogin from "./components/RedesLogin"

import SelectCountry from "./components/selected/SelectCountry"
import SelectSex from "./components/selected/SelectSex"

import focus from "../functions/focus"
import check from "../functions/check"
import Input from "./components/Input"

import $, { $validarContrasenaDebil } from "../../../../../functions/$"

const Register = () => {
  const isValido = () => {
    const validacion = $("validacion")
    validacion.classList.add("active")

    setTimeout(() => {
      validacion.classList.remove("active")
    }, 3000)
  }
  const submit = e => {
    e.preventDefault()

    const nombre = $("registerUserName").value
    const username = $("registerUserSurName").value
    const userData = $("userData").value
    const registerCorreo = $("registerCorreo").value

    const sex = $("selLabel2").value
   /*  const contry = $("selLabel").innerText */

    const contrasena1 = $("registerPassword").value
    const contrasena2 = $("registerPasswordConfirm").value

    if (
      nombre === "" ||
      username === "" ||
      userData === "" ||
      registerCorreo === "" ||
      sex === "" ||
   /*    contry === "" || */
      contrasena1 === ""
    ) {
      setmensaje("todos los campos son necesarios.")
      isValido()
      return
    }

    if (contrasena1.length < 8) {
      isValido()
      setmensaje("la contraseña debe ser mayor a 8 caracteres")
      return
    }
    if (contrasena1 !== contrasena2) {
      setmensaje("Las contraseñas coinciden.")
      isValido()
      return
    }

    if ($validarContrasenaDebil(contrasena1)) {
      setmensaje("La contraseña debe ser alfanumérico")
      isValido()
      return
    }

    $("registerButtom").innerText = "creando cuenta"

    const data = {
      nombre,
      username,
      FechaDeNacimiento: userData,
      email: registerCorreo,
      sexo: sex,
    /*   contry, */
      password: contrasena1,
    }

    console.log(data)

    fetch("http://localhost:4000/api/usuarios", {
      method: "POST", // o 'PUT'
      body: JSON.stringify(data), // data debe ser `string` o {object}!
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(async error => console.error("Error:", error))

    /* setTimeout(() => {
      $("registerButtom").innerText = "Crear cuenta"
    }, 1500); */
  }

  const [mensaje, setmensaje] = useState("")

  return (
    <div
      className="backRight formGroupSesion"
      id="traseraDerecha"
      onClick={() => {
        focus()
      }}
    >
      {/* Botone de iniciar secion y registrar */}
      <Buttons />

      <form
        onSubmit={e => {
          submit(e)
        }}
      >
        {/* Input del Primer nombre */}
        <Input
          type="text"
          id="registerUserName"
          placeholder="Nombre y apellido"
          icono="icon-person"
          next="registerUserSurName"
          maxLength="15"
        />

        {/* Input del Primer apellido */}

        <Input
          type="text"
          id="registerUserSurName"
          placeholder="Nombre de Usuario"
          icono="icon-person"
          next="registerCorreo"
          maxLength="15"
        />

        <SelectSex />

        {/* Input de fecha de nacimiento */}

        <Input
          type="date"
          id="userData"
          placeholder="data"
          icono="icon-calendar"
          next="registerCorreo"
          maxLength="15"
        />

        {/* Input de country */}
        {/* <SelectCountry /> */}
        <Input
          type="email"
          id="registerCorreo"
          placeholder="Correo electrónico"
          icono="icon-mail"
          next="registerPassword"
        />
        <Input
          type="password"
          id="registerPassword"
          placeholder="Contraseña"
          icono="icon-https"
          next="registerPasswordConfirm"
        />
        <Input
          type="password"
          id="registerPasswordConfirm"
          placeholder="Confirmar contraseña"
          icono="icon-lock-plus"
        />

        {/* <RedesLogin /> */}

        <div className="validacion" id="validacion">
          <p>{mensaje}</p>
        </div>

        <div className="containerRegister">
          <button
            className="registerButtom submit"
            type="submit"
            value="Enviar"
            name="registerButtom"
            id="registerButtom"
            onClick={() => {
              check("register")
            }}
          >
            Crear cuenta
          </button>
        </div>
      </form>
      <div className="legal">
        <p>
          Al registrarte, estas aceptando los{" "}
          <A to={"/terminos-y-condiciones"}>Términos y condiciones</A>, y la{" "}
          <A to="/politica-de-privacidad-y-protección-de-datos">
            Política de privacidad y protección de datos
          </A>{" "}
          de Genarogg.
        </p>
      </div>
    </div>
  )
}

export default Register
