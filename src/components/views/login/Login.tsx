import React, { FunctionComponent } from "react"

//@ts-ignore
import Seo from "../../nano/Seo"

import QLogin from "../../../consultas/login/QLogin.js"
import Layout from "../../layout"
import Img from "../../nano/Img"
import MyForm from "./form/MyForm"

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  return (
    <>
      {
        // @ts-ignore
        <Seo title="Login" url="https://vueltarapida.net/login" />
      }

      <Layout>
        <Img type="bg" src={QLogin().bgLogin} id="LoginBg">
          <MyForm />
        </Img>
      </Layout>
    </>
  )
}

export default Login
