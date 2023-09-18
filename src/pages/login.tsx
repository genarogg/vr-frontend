import React from "react"

import Login from "../components/views/login/Login"
import Layout from "../components/layout"

interface LoginProps {}

const login: React.FunctionComponent<LoginProps> = () => {
  return (
    <>
      <Layout>
        <Login></Login>
      </Layout>
    </>
  )
}

export default login
