import React, { FunctionComponent } from "react"

//@ts-ignore
import Seo from "../../nano/Seo"

import QLogin from "../../../consultas/login/QLogin.js"
import AuthContext from "../../../context/autenticacion/authContext"
import Img from "../../nano/Img"
import MyForm from "./form/MyForm"
import { navigate } from "gatsby"

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const { autenticado, usuario, usuarioAutenticado } =
    React.useContext(AuthContext)

  return (
    <>
      {autenticado && usuario ? (
        <>{navigate("/")}</>
      ) : (
        <>
          {
            // @ts-ignore
            <Seo title="Login" url="https://vueltarapida.net/login" />
          }
          <Img type="bg" src={QLogin().bgLogin}>
            <MyForm />
          </Img>
        </>
      )}
    </>
  )
}

export default Login
