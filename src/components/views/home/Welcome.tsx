import React, { FunctionComponent } from "react"
import consultas from "../../../consultas"
import A from "../../nano/A"
import Img from "../../nano/Img"
import { $toggle } from "../../../functions/$"

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

          <form action="/registro" method="post">
            <div className="input" id="containerName">
              <label htmlFor="name">
                <span className="ico icon-user"></span>
              </label>
              <input type="text" id="name" placeholder="nombre" />
            </div>

            <div className="input" id="containerEmail">
              <label htmlFor="email">
                <span className="ico icon-mail"></span>
              </label>
              <input type="email" id="email" placeholder="email" />
            </div>

            <button id="btn" className="btn">
              Descargar Juego
            </button>
          </form>
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
