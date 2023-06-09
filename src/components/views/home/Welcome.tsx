import React, { FunctionComponent } from "react"
import consultas from "../../../consultas"
import A from "../../nano/A"
import Img from "../../nano/Img"

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  return (
    <div className="home-background">
      <Img type="bg" src={consultas().background} css="background">
        <Img src={consultas().logoHome} />

        <div className="iniciar-juego">
          <A to="#">
            <button>Juega Ahora</button>
          </A>
        </div>
      </Img>
    </div>
  )
}

export default Welcome
