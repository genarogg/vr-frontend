import React, { FunctionComponent } from "react"

//@ts-ignore
import videoCuentaRegresiva from "../../../img/home/video/CUENTA-REGRESIVA.mp4"
import Video from "../../nano/Video"
/* import Section from "./Section" */
import Img from "../../nano/Img"

import Qhome from "../../../consultas/home/Qhome"

import { $moveComponent } from "../../../functions/$"

interface CuentaRegresivaProps {}

const CuentaRegresiva: FunctionComponent<CuentaRegresivaProps> = () => {
  return (
    <>
      <section
        id="cuentaRegresiva"
        className="cuenta-regresiva"
        onMouseMove={e => {
          $moveComponent(e, "bgVideo")
        }}
      >
        <h2>YA ESTAMOS EN CUENTA REGRESIVA</h2>
        <Img type="bg" src={Qhome().bgVideo} id="bgVideo">
          <Video src={videoCuentaRegresiva} id="cuentaRegresivaVideo"></Video>
        </Img>
      </section>
    </>
  )
}

export default CuentaRegresiva
