import React from "react"

import AuthState from "../../context/autenticacion/authState"
const AuthProvider  = ({ children }) => {
  return (
    <>
      <AuthState>{children}</AuthState>
    </>
  )
}

export default AuthProvider 
