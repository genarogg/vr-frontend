import React, { useEffect } from "react"

import Img from "../components/nano/Img"
import A from "../components/nano/A"
import Icono from "../components/nano/Icono"
import Video from "../components/nano/Video"
import consultas from "../consultas/Consultas"

//@ts-ignore
import videoCuentaRegresiva from "../img/home/video/CUENTA-REGRESIVA.mp4"

import "../css/style.scss"
import "../css/icomoon/style.css"
import Section from "../components/general/Section"

import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay } from "swiper"

// Import Swiper React components

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { v4 as uuidv4 } from "uuid"
interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
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
          <Video src={videoCuentaRegresiva} id="cuentaRegresivaVideo"></Video>
        </Section>

        <Section id="vehiculos" css="vehiculos" title="Vehiculos">
          <p>
            Los espectaculares diseños de los autos, de nuestra galería,
            pertenecen al Modelado 3D de algunos de los vehículos que traeremos
            a continuación en nuestro primer video juego de competencia de autos
            NFT. Nuestra idea es mostrar, vender y comercializar con los diseños
            de autos que nuestro equipo se especializa en diseñar, modelar y
            programar, tomamos su talento para desarrollar, plasmar y jugar en
            nuestro primer video juego de Competencias de Autos Vuelta Rápida.
            Todos los diseños de nuestra galería tienen inspiración en algún
            diseño con licencia, que ves por las calles, nuestros diseños tienen
            una autorización de uso ya que son diseños exclusivos de nuestra
            empresa Desincryp.
          </p>

          <div className="videos">
            <Video src={videoCuentaRegresiva} id="video1" play={false}></Video>
            <Video src={videoCuentaRegresiva} id="video2" play={false}></Video>
            <Video src={videoCuentaRegresiva} id="video3" play={false}></Video>
            <Video src={videoCuentaRegresiva} id="video4" play={false}></Video>
          </div>
        </Section>
        <Section id="pistas" css="pistas" title="Pistas">
          <div className="center">
            <p>
              Las pistas más feroces, con curvas pronunciadas, atajos y
              obstáculos para esquivar, pertenecen a nuestra idea de carreras,
              no es solo un simple despegue es una pista, es saber que el
              control de la pista lo tienes tú, es saber y entender que el
              control de tu vehículo está en tus manos. Despegar de 0-100 en 2.3
              Segundos en un híper-Sport, no te hace el más rápido, saber tomar
              una curva, y hacer que los demás muerdan el polvo de tus
              neumáticos, es la idea de dar la Vuelta Rápida, en uno de nuestros
              circuitos y hacerte ganador. Vive la mayor adrenalina de tu vida
              en nuestras pistas, con diseños exclusivos de Desincryp, con autos
              de nuestras escuderías, y gana premios y monetiza tu tiempo en dar
              Vuelta Rápida
            </p>
          </div>

          <Swiper
            slidesPerView={4}
            grabCursor={true}
            loop
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {consultas().mapas.map(mapa => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <div className="sliderContariner">
                    <Img src={mapa} />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Section>

        <Section id="Pit" css="pit" title="Detalles Claves de los Pit">
          <Img src={consultas().pit}></Img>

          <div className="containerPit">
            <div className="caracteristica">
              <Icono css="icon-download"></Icono>{" "}
              <h2>Sin descargas adicionales</h2>
              <p>
                Sin descargas adicionales, solo descargaras nuestro aplicativo
                para jugar desde tu Android y nuestra Wallet, para quienes les
                gustaría manejar su cuenta desde su móvil, no debes descargas
                nada adicionales fuera de nuestro proyecto.
              </p>
            </div>

            <div className="caracteristica">
              <Icono css="icon-notice"></Icono>{" "}
              <h2>Sin descargas adicionales</h2>
              <p>
                Sin descargas adicionales, solo descargaras nuestro aplicativo
                para jugar desde tu Android y nuestra Wallet, para quienes les
                gustaría manejar su cuenta desde su móvil, no debes descargas
                nada adicionales fuera de nuestro proyecto.
              </p>
            </div>

            <div className="caracteristica">
              <Icono css="icon-database"></Icono>
              <h2>Sin descargas adicionales</h2>
              <p>
                Sin descargas adicionales, solo descargaras nuestro aplicativo
                para jugar desde tu Android y nuestra Wallet, para quienes les
                gustaría manejar su cuenta desde su móvil, no debes descargas
                nada adicionales fuera de nuestro proyecto.
              </p>
            </div>
          </div>
        </Section>

        <footer>
          <div></div>
          <p>Copyright © 2023 vueltarapida.net</p>
          <ul>
            <li>
              <A to="#">
                <Icono css="icon-instagram"></Icono>
              </A>
            </li>
            <li>
              <A to="#">
                <Icono css="icon-twitter"></Icono>
              </A>
            </li>
            <li>
              <A to="#">
                <Icono css="icon-envelop"></Icono>
              </A>
            </li>
            <li>
              <A to="#">
                <Icono css="icon-telegram"></Icono>
              </A>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Home
