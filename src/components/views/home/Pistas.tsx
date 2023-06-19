import React from "react"
import { v4 as uuidv4 } from "uuid"

import Section from "./Section"
import Img from "../../nano/Img"
import consultas from "../../../consultas"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"

interface PistasProps {}

const Pistas: React.FunctionComponent<PistasProps> = () => {
  return (
    <Section id="pistas" css="pistas" title="Pistas">
      <div className="center">
        <p>
          Las pistas más feroces, con curvas pronunciadas, atajos y obstáculos
          para esquivar, pertenecen a nuestra idea de carreras, no es solo un
          simple despegue es una pista, es saber que el control de la pista lo
          tienes tú, es saber y entender que el control de tu vehículo está en
          tus manos. Despegar de 0-100 en 2.3 Segundos en un híper-Sport, no te
          hace el más rápido, saber tomar una curva, y hacer que los demás
          muerdan el polvo de tus neumáticos, es la idea de dar la Vuelta
          Rápida, en uno de nuestros circuitos y hacerte ganador. Vive la mayor
          adrenalina de tu vida en nuestras pistas, con diseños exclusivos de
          Desincryp, con autos de nuestras escuderías, y gana premios y monetiza
          tu tiempo en dar Vuelta Rápida
        </p>
      </div>

      <Swiper
        slidesPerView={4}
        grabCursor={true}
        loop
        effect="fade"
        speed={3000}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1500: {
            slidesPerView: 4,
          },

          900: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          1: {
            slidesPerView: 1,
          },
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
  )
}

export default Pistas
