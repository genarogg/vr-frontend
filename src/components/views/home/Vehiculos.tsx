import React from "react"
import Section from "./Section"
import Video from "../../nano/Video"

//@ts-ignore
import videoCuentaRegresiva from "../../../img/home/video/CUENTA-REGRESIVA.mp4"

interface VehiculosProps {}

const widthVideo = 360
const heightVideo = 202

const Vehiculos: React.FunctionComponent<VehiculosProps> = () => {
  return (
    <Section id="vehiculos" css="vehiculos" title="Vehiculos">
      <p>
        Los espectaculares diseños de los autos, de nuestra galería, pertenecen
        al Modelado 3D de algunos de los vehículos que traeremos a continuación
        en nuestro primer video juego de competencia de autos NFT. Nuestra idea
        es mostrar, vender y comercializar con los diseños de autos que nuestro
        equipo se especializa en diseñar, modelar y programar, tomamos su
        talento para desarrollar, plasmar y jugar en nuestro primer video juego
        de Competencias de Autos Vuelta Rápida. Todos los diseños de nuestra
        galería tienen inspiración en algún diseño con licencia, que ves por las
        calles, nuestros diseños tienen una autorización de uso ya que son
        diseños exclusivos de nuestra empresa Desincryp.
      </p>

      <div className="videos">
        {/* <Video src={videoCuentaRegresiva} id="video1" play={false}></Video> */}
        <div className="videoContainer">
          <iframe
            width={widthVideo}
            height={heightVideo}
            src="https://www.youtube.com/embed/Hs5aTKwfA_8"
            title="JERICO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoContainer">
          <iframe
            width={widthVideo}
            height={heightVideo}
            src="https://www.youtube.com/embed/cIzv8GeH95o"
            title="SUV EROS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoContainer">
          <iframe
            width={widthVideo}
            height={heightVideo}
            src="https://www.youtube.com/embed/pjSvbr1B0sc"
            title="SPARTA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoContainer">
          <iframe
            width={widthVideo}
            height={heightVideo}
            src="https://www.youtube.com/embed/PkD-dQp9HtE"
            title="Grigora"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/*    <Video src={videoCuentaRegresiva} id="video2" play={false}></Video>
        <Video src={videoCuentaRegresiva} id="video3" play={false}></Video>
        <Video src={videoCuentaRegresiva} id="video4" play={false}></Video> */}
      </div>
    </Section>
  )
}

export default Vehiculos
