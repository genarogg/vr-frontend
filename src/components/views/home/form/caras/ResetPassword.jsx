import React from "react";

import Icono from "../../../../nano/Icono";
import A from "../../../../nano/A";
import $ from "../../../../../functions/$";

import focus from "../functions/focus";

const ResetPassword = () => {
  const submit = (e) => {
    e.preventDefault();
  };

  const voltearIniciar = () => {
    const tarjeta = $("containerRegisterLogin");
 

    $("traseraDerecha").style.display = "none";
    if (
      tarjeta.classList.contains("activeRight") ||
      tarjeta.classList.contains("activeLeft")
    ) {
      tarjeta.classList.remove("activeRight");
      if (tarjeta.classList.contains("activeLeft")) {
      }
      tarjeta.classList.remove("activeLeft");
      $("buttonBack").classList.remove("active");
    }

    $("front").classList.add("tarjetaFocus");

    setTimeout(() => {
      $("front").classList.remove("tarjetaFocus");
    }, 1500);
  };

  return (
    <>
      <div
        className="backLeft formGroupSesion resetContainer"
        id="traseraIzq"
        onClick={() => {
          focus();
        }}
      >
        <div className="title">
          <div className="buttonSesion buttonBack">
            <button
              className="iniciarSesion"
              onClick={() => {
                voltearIniciar();
              }}
            >
              <A href="#iniciarSesion" css="animationCircle" id="buttonBack">
                <Icono css="icon-arrow-left" />
              </A>
            </button>
          </div>
          <p>Restablecer la contraseña</p>
          <hr className="titleHr" />
        </div>
        <form>
          <div className=" containerInput">
            <label htmlFor="resetPassword" className="icoBackground ">
              <Icono css="icon-mail" />
            </label>
            <input
              name="resetPassword"
              id="resetPassword"
              type="email"
              placeholder="Correo electronico"
              onClick={() => {
                focus();
              }}
            />

            <button
              className="submitEmail"
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <span className="ico icon-send"></span>
            </button>
          </div>
          <p className="aviso">
            Ingrese el correo con el que se registro, Y se Te enviará un enlace
            con el que podrá restablecer su contraseña.
          </p>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
