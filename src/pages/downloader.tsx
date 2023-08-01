import React from "react"

//@ts-ignore
import RutaProtegida from "../components/AuthLayout/RutaProtegida"

interface downloaderProps {}

const downloader: React.FunctionComponent<downloaderProps> = () => {
  return (
    <>
      <RutaProtegida></RutaProtegida>
    </>
  )
}

export default downloader
