import React, { FunctionComponent, useContext } from "react"
import AuthContext from "../../../context/autenticacion/authContext"

interface DownloaderProps {}

const Downloader: FunctionComponent<DownloaderProps> = () => {
  const { autenticado } = useContext(AuthContext)

  return (
    <>
      <h1>Hola mundo</h1>
    </>
  )
}

export default Downloader
