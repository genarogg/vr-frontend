import React, { FunctionComponent, useContext, useEffect } from "react"
import AuthContext from "../../context/autenticacion/authContext"
import Login from "../views/login/Login"

interface AuthLayoutProps {
  children?: any
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  const { autenticado, usuario, usuarioAutenticado } = useContext(AuthContext)

  useEffect(() => {
    usuarioAutenticado()
  }, [])

  return <>{autenticado && usuario ? <>{children}</> : <Login />}</>
}

export default AuthLayout
