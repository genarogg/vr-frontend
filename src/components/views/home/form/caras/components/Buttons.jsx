import React from "react"

import $, { $style, $classList } from "../../../../../../functions/$"

const Buttons = () => {
  /* Voltea la tarjeta para iniciar sesion */
  const voltearIniciar = () => {
    const tarjeta = $("containerRegisterLogin")

    $style("traseraDerecha").display = "block"

    if (
      tarjeta.classList.contains("activeRight") ||
      tarjeta.classList.contains("activeLeft")
    ) {
      tarjeta.classList.remove("activeRight")

      if (tarjeta.classList.contains("activeLeft")) {
      }
      tarjeta.classList.remove("activeLeft")
    }

    $classList("front").add("tarjetaFocus")

    setTimeout(() => {
      if ($("front") !== null) {
        $classList("front").remove("tarjetaFocus")
      }
    }, 1500)
  }

  const voltearRegistro = () => {
    const tarjetas = $("containerRegisterLogin")

    if (!tarjetas.classList.contains("activeRight")) {
      tarjetas.classList.add("activeRight")
    }

    if (tarjetas.classList.contains("activeLeft")) {
      tarjetas.classList.remove("activeLeft")
    }
    $style("traseraDerecha").display = "block"

    $classList("traseraDerecha").add("tarjetaFocus")

    setTimeout(() => {
      if ($("traseraDerecha") !== null) {
        $classList("traseraDerecha").remove("tarjetaFocus")
      }
    }, 1500)
  }

  return (
    <div className="buttonSesion">
      <button
        className="iniciarSesion"
        onClick={() => {
          voltearIniciar()
        }}
        id="loginTitle"
      >
        <p>Iniciar sesión</p>
      </button>
      <span className="spanSesion">|</span>
      <button
        className="registrarse"
        onClick={() => {
          voltearRegistro()
        }}
        id="registerTitle"
      >
        <p>Regístrarse</p>
      </button>
    </div>
  )
}

export default Buttons
