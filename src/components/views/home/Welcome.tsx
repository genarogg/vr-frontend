import React, { FunctionComponent } from "react"
import Qwelcome from "../../../consultas/home/Qwelcome"
import A from "../../nano/A"
import Img from "../../nano/Img"
import { $toggle } from "../../../functions/$"
import MyForm from "./Form/MyForm"
import consultas from "../../../consultas"
interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const registro = () => {
    $toggle("home-bg", "iniciar-seccion")
  }

  return (
    <>
      <div className="welcome" id="welcome">
        <Img type="bg" src={consultas().background} css="background">
          <div className="container">
            <Img src={Qwelcome().bg} />

            <MyForm />
          </div>
        </Img>
      </div>
      {/* 
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
      </div> */}
    </>
  )
}

export default Welcome
