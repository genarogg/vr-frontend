import React, { useEffect } from "react"
import Img from "../components/nano/Img"
import A from "../components/nano/A"
import consultas from "../consultas/Consultas"

import videoCuentaRegresiva from "../img/home/video/CUENTA-REGRESIVA.mp4"

import "../css/style.scss"
import Section from "../components/general/Section"

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  console.log(consultas().logoHome)

  useEffect(() => {
    //@ts-ignore
    document.querySelector("#cuentaRegresiva video").play()

    const video = document.getElementById("cuentaRegresivaVideo")
    video
      .play()
      .then(() => {
        console.log("El video se ha iniciado correctamente")
      })
      .catch(error => {
        console.error("Se ha producido un error al iniciar el video:", error)
      })
  }, [])

  return (
    <>
      <div className="containerAll">
        <header>
          <div className="logo">
            <A to="/">
              <Img src={consultas().logo} />
            </A>
          </div>
          <nav>
            <ul>
              <li>
                <A to="#">Inicio</A>
              </li>
              <li>
                <A to="#">NFTs</A>
              </li>
              <li>
                <A to="#">DSP</A>
              </li>
              <li>
                <A to="#">Whitepaper</A>
              </li>
              <li>
                <A to="#">Desincryp</A>
              </li>
              <li>
                <A to="#">Idioma</A>
              </li>
            </ul>
          </nav>
        </header>
        <div className="home-background">
          <Img type="bg" src={consultas().background} css="background">
            <Img src={consultas().logoHome} />
          </Img>

          <div className="iniciar-juego">
            <A to="#" type="a">
              <button>
                {/* <Img type="bg" src={consultas().bandera}></Img> */}
                Juega Ahora
              </button>
            </A>
          </div>
        </div>

        <Section
          id="cuentaRegresiva"
          css="cuenta-regresiva"
          title="YA ESTAMOS EN CUENTA REGRESIVA"
        >
          <video src={videoCuentaRegresiva} autoPlay controls loop id="cuentaRegresivaVideo"></video>
        </Section>
      </div>
    </>
  )
}

export default Home
