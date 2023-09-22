import React, { FunctionComponent, useContext } from "react"
import axios from "axios"
import $, { $parametrosUrl } from "../../../functions/$"
//@ts-ignore
/* import RedesLogin from "./components/RedesLogin" */
//@ts-ignore
import check from "../login/form/functions/check"
//@ts-ignore
import Input from "../login/form/caras/components/Input"
//@ts-ignore
import focus from "../login/form/functions/focus"

//@ts-ignore
import Seo from "../../nano/Seo"

import QLogin from "../../../consultas/login/QLogin.js"

import Img from "../../nano/Img"
import { toast } from "react-toastify"
import { BACKEND } from "../../../../env"

import AuthContext from "../../../context/autenticacion/authContext"

interface NewPasswordProps {}

const NewPassword: FunctionComponent<NewPasswordProps> = () => {
  const { iniciarSesion } = useContext(AuthContext)

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

  const resetPass = e => {
    e.preventDefault()

    const token = $parametrosUrl("token")

    //@ts-ignore
    const newPass = $("newPass").value
    //@ts-ignore
    const newPassRepited = $("newPassRepited").value

    if (newPass === "" || newPassRepited === "") {
      notificacion("todos los campos son necesarios.")
      return
    }

    if (newPass.length < 8) {
      notificacion("la contraseña debe ser mayor a 8 caracteres")
      return
    }

    if (newPass !== newPassRepited) {
      notificacion("tus contraseñas no coinciden")
      return
    }

    const data = {
      password: newPass,
      token,
    }

    axios.post(`${BACKEND}/email/newpass`, data).then(res => {
      toast.success(` ${res.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

      iniciarSesion({ email: res.data.userEmail, password: data.password })
    })
  }

  return (
    <>
      {
        // @ts-ignore
        <Seo title="Login" url="https://vueltarapida.net/login" />
      }
      <Img type="bg" src={QLogin().bgLogin}>
        <>
          <div
            className="front formGroupSesion newPass"
            id="front"
            onClick={() => {
              focus()
            }}
          >
            <form>
              <Input
                type="password"
                id="newPass"
                placeholder="Nueva contraseña"
                icono="icon-lock"
                next="loginPassword"
              />
              <Input
                type="password"
                id="newPassRepited"
                placeholder="Repetir Contraseña"
                icono="icon-lock-2"
                next="resetButtons"
              />

              <div className="buttonContainer">
                <button
                  className="login submit"
                  name="resetButtons"
                  id="resetButtons"
                  value="send"
                  onClick={e => {
                    check("login")
                    resetPass(e)
                  }}
                >
                  Acceder
                </button>
              </div>
            </form>
          </div>
        </>
      </Img>
    </>
  )
}

export default NewPassword
