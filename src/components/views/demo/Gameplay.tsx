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
          {/*  <div style={{width:"400px",height:"400px", position:"relative", overflow:"hidden"}}> */}
          <iframe
            src="https://demovueltarapida.netlify.app/"
            width="960"
            height="642"
            scrolling="no"
            frameBorder="1"
          ></iframe>
          {/* </div> */}
        </Img>
      </RutaProtegida>
    </>
  )
}

export default GamePlay
