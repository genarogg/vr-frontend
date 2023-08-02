import React, { FunctionComponent } from "react"
import RutaProtegida from "../../AuthLayout/RutaProtegida"
import Img from "../../nano/Img"
import Qdownloader from "../../../consultas/Qdownloader"

interface DownloaderProps {}

const Downloader: FunctionComponent<DownloaderProps> = () => {
  const Card = ({ accion = "" }) => {
    return (
      <>
        <div className="card">
          
          <p>tarjeta</p>

          <button>{accion}</button>
        </div>
      </>
    )
  }
  return (
    <>
      <RutaProtegida>
        <Img
          src={Qdownloader().bg}
          type="bg"
          css="downloader"
          id="downloaderBg"
        >
          <div className="card-container">
            <Card accion="descargar" />
            <Card accion="jugar" />
            <Card accion="descargar" />
          </div>
        </Img>
      </RutaProtegida>
    </>
  )
}

export default Downloader
