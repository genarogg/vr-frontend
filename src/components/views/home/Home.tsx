import React, { useEffect, FunctionComponent } from "react"
import CuentaRegresiva from "./CuentaRegresiva"
import Pistas from "./Pistas"

import Vehiculos from "./Vehiculos"
import Welcome from "./Welcome"
import Layout from "../../layout"
import Team from "./Team"

//@ts-ignore
import Seo from "../../nano/Seo"

import Qhome from "../../../consultas/home/Qhome"

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    document.body!.style.backgroundImage =
      "url(/static/patron-abstrat-234a4a9a6fe7895d6567ec53d768eae9.avif)"
  }, [])

  return (
    <>
      {
        // @ts-ignore
        <Seo
          title="Home"
          img={Qhome().openImg}
          url="https://vueltarapida.net"
        />
      }
      {console.log(Qhome().openImg)}
      <Layout>
        <Welcome></Welcome>
        <CuentaRegresiva></CuentaRegresiva>
        <Vehiculos></Vehiculos>
        <Pistas></Pistas>
        <Team></Team>
      </Layout>
    </>
  )
}

export default Home
