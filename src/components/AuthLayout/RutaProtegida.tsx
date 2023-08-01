import React, { useContext, FunctionComponent, useEffect } from "react"
import Welcome from "../views/home/Welcome"

import Layout from "../layout"
import Downloader from "../views/downloader/downloader"
import AuthLayout from "./AuthLayout"

interface RutaProtegidaProps {
  children?: any
}

const RutaProtegida: FunctionComponent<RutaProtegidaProps> = () => {
  return (
    <>
      <Layout>
        <AuthLayout></AuthLayout>
      </Layout>
    </>
  )
}

export default RutaProtegida
