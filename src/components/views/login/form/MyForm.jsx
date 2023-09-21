import React from "react"

import Login from "./caras/Login"
import Register from "./caras/Register"
import ResetPassword from "./caras/ResetPassword"
import { ToastContainer } from "react-toastify"

import "./css-form/index.scss"

const MyForm = () => {
  return (
    <>
      <div
        style={{
          alignItems: "baseline",
          justifyContent: "center",
          display: "flex",
        }}
        className="containerForm new-css"
        id="containerRegisterLogin"
      >
        <div className="tamano"></div>
        <ResetPassword />
        <Login />
        <Register />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default MyForm
