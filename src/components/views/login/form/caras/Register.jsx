import React, { useState, useContext } from "react"

import A from "../../../../nano/A"
import { toast } from "react-toastify"
import Buttons from "./components/Buttons"
/* import RedesLogin from "./components/RedesLogin"

import SelectCountry from "./components/selected/SelectCountry" */
import SelectSex from "./components/selected/SelectSex"

import focus from "../functions/focus"
import check from "../functions/check"
import Input from "./components/Input"

import $, { $validarContrasenaDebil } from "../../../../../functions/$"

import AuthContext from "../../../../../context/autenticacion/authContext"

const Register = () => {
  const { registrarUsuario } = useContext(AuthContext)

  const isValido = () => {
    const validacion = $("validacion")
    validacion.classList.add("active")

    setTimeout(() => {
      validacion.classList.remove("active")
    }, 3000)
  }

  const notificacion = mensaje => {
    toast.error(mensaje, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  const submit = e => {
    e.preventDefault()

    const nombre = $("registerUserName").value?.toLowerCase()
    const username = $("registerUserSurName").value?.toLowerCase()
    const edad = $("userData").value?.toLowerCase()
    const registerCorreo = $("registerCorreo").value?.toLowerCase()

    const sex = $("selLabel2").value?.toLowerCase()
    /*  const contry = $("selLabel").innerText */

    const contrasena1 = $("registerPassword").value
    const contrasena2 = $("registerPasswordConfirm").value

    if (
      nombre.trim() === "" ||
      username.trim() === "" ||
      edad.trim() === "" ||
      registerCorreo.trim() === "" ||
      sex.trim() === "" /* || */
      /*    contry.trim() === "" || */
      /* contrasena1.trim() === "" */
    ) {
      setmensaje("todos los campos son necesarios.")
      notificacion("todos los campos son necesarios.")
      isValido()
      return
    }



    if (contrasena1.length < 8) {
      isValido()
      notificacion("la contraseña debe ser mayor a 8 caracteres")
      setmensaje("la contraseña debe ser mayor a 8 caracteres")
      return
    }
    if (contrasena1 !== contrasena2) {
      notificacion("tus contraseñas no coinciden")
      setmensaje("Las contraseñas coinciden.")
      isValido()
      return
    }

    if ($validarContrasenaDebil(contrasena1)) {
      notificacion("La contraseña debe ser alfanumérico")
      setmensaje("La contraseña debe ser alfanumérico")
      isValido()
      return
    }

    if (edad <= 0 || edad >= 120) {
      notificacion("La edad es invalida")
      setmensaje("La edad es invalida")
      isValido()
      return
    }

    $("registerButtom").innerText = "creando cuenta"

    const data = {
      nombre,
      username,
      edad,
      email: registerCorreo,
      sexo: sex,
      /*   contry, */
      password: contrasena1,
    }

    console.log(data)

    registrarUsuario(data)
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
          icono="icon-user2"
          next="registerUserSurName"
          maxLength="15"
        />

        {/* Input del Primer apellido */}

        <Input
          type="text"
          id="registerUserSurName"
          placeholder="Nombre de Usuario"
          icono="icon-user-add"
          next="registerCorreo"
          maxLength="15"
        />

        <SelectSex />

        {/* Input de fecha de nacimiento */}

        <Input
          type="number"
          id="userData"
          placeholder="Edad"
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
          icono="icon-lock"
          next="registerPasswordConfirm"
        />
        <Input
          type="password"
          id="registerPasswordConfirm"
          placeholder="Confirmar contraseña"
          icono="icon-lock-2"
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
          Al registrarte estas aceptando los{" "}
          <A to={"/terminos-y-condiciones"}>Términos y condiciones</A> y la{" "}
          <A to="/politica-de-privacidad-y-protección-de-datos">
            Política de privacidad y protección de datos
          </A>{" "}
          de vueltarapida.
        </p>
      </div>
    </div>
  )
}

export default Register
