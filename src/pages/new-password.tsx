import React from "react"

import NewPassword from "../components/views/newPassword/NewPassword"
import Layout from "../components/layout"

interface newPassProps {}

const newPass: React.FunctionComponent<newPassProps> = () => {
  return (
    <>
      <Layout>
        <NewPassword />
      </Layout>
    </>
  )
}

export default newPass
