import React from "react"
import RutaProtegida from "../../AuthLayout/RutaProtegida"

import Img from "../../nano/Img"
import Qdemo from "../../../consultas/Qdemo"

interface GamePlayProps {}

const GamePlay: React.FunctionComponent<GamePlayProps> = () => {
  return (
    <>
      <RutaProtegida>
        <Img src={Qdemo().bg} type="bg" css="downloader gameplay" id="downloaderBg">
          
          <iframe
            src="https://demo.vueltarapida.net"
            width="960"
            height="642"
            allowFullScreen
            scrolling="no"
            frameBorder="1"
          ></iframe>
   
        </Img>
      </RutaProtegida>
    </>
  )
}

export default GamePlay
