import React, { FunctionComponent } from "react"
import consultas from "../../../consultas"
import A from "../../nano/A"
import Img from "../../nano/Img"
import  { $toggle } from "../../../functions/$"
import Form from "./Form"

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const registro = () => {
    $toggle("home-bg", "iniciar-seccion")
  }

  return (
    <div className="home-background" id="home-bg">
      <Img type="bg" src={consultas().background} css="background">
        <div className="contain">
          <Img src={consultas().logoHome} />

          <Form></Form>
        </div>

        <div className="iniciar-juego">
          <A to="#">
            <button
              onClick={() => {
                registro()
              }}
            >
              Juega Ahora
            </button>
          </A>
        </div>
      </Img>
    </div>
  )
}

export default Welcome
