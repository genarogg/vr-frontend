import React, { FunctionComponent } from "react"

//@ts-ignore
import videoCuentaRegresiva from "../../../img/home/video/CUENTA-REGRESIVA.mp4"
import Video from "../../nano/Video"
import Section from "./Section"
import Img from "../../nano/Img"

interface CuentaRegresivaProps {}

const CuentaRegresiva: FunctionComponent<CuentaRegresivaProps> = () => {
  return (
    <Section
      id="cuentaRegresiva"
      css="cuenta-regresiva"
      title="YA ESTAMOS EN CUENTA REGRESIVA"
    >
      <Img type="bg" src={""}>
        <Video src={videoCuentaRegresiva} id="cuentaRegresivaVideo"></Video>
      </Img>{" "}
    </Section>
  )
}

export default CuentaRegresiva
