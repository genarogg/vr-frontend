import React, { FunctionComponent } from "react"
import CuentaRegresiva from "./CuentaRegresiva"
import Pistas from "./Pistas"
import Pit from "./Pit"
import Vehiculos from "./Vehiculos"
import Welcome from "./Welcome"
import Layout from "../../layout"

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Layout>
        <Welcome></Welcome>
        <CuentaRegresiva></CuentaRegresiva>
        <Vehiculos></Vehiculos>
        <Pistas></Pistas>
        <Pit></Pit>
      </Layout>
    </>
  )
}

export default Home
