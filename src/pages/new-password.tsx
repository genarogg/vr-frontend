import React from "react"

import NewPassword from "../components/views/newPassword/NewPassword"
import Layout from "../components/layout"

import { ToastContainer } from "react-toastify"

interface newPassProps {}

const newPass: React.FunctionComponent<newPassProps> = () => {
  return (
    <>
      <Layout>
        <NewPassword />

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
      </Layout>
    </>
  )
}

export default newPass
