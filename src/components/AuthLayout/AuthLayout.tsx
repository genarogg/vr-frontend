import React, { FunctionComponent, useContext, useEffect } from "react"
import AuthContext from "../../context/autenticacion/authContext"
import Welcome from "../views/home/Welcome"

interface AuthLayoutProps {
  children?: any
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  const { autenticado, usuario, usuarioAutenticado } = useContext(AuthContext)

  useEffect(() => {
    usuarioAutenticado()
  }, [])

  return <>{autenticado && usuario ? <>{children}</> : <Welcome />}</>
}

export default AuthLayout
