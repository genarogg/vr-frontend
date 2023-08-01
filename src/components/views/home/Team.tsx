import React from "react"

import Img from "../../nano/Img"
import Qteam from "../../../consultas/Qteam"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"

import { EffectCoverflow, Autoplay } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import A from "../../nano/A"
import Icono from "../../nano/Icono"

interface TeamProps {}

const Team: React.FunctionComponent<TeamProps> = () => {
  const Slider = () => {
    return (
      <>
        <div className="">
          {/*      <h4 className="area">programador</h4> */}
          <Img src={Qteam().team[0]} />
          <h3 className="name">genaro gonzalez</h3>

          <p className="description">
            Soy un profesional en desarrollo frontend con una amplia experiencia
            en programación desde los 18 años. Mi especialidad es javascript con
            reactjs, y he trabajado con diversas organizaciones como la
            comunidad de programadores y comfeco. Además, he sido reconocido
            como contribuyente en Arctic Code Vault Contributor de github.
          </p>
          <div className="contacto">
            <A to="#" type="a">
              <Icono css=" icon-database"></Icono>
              <Icono css=" icon-database"></Icono>
            </A>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <section className="containerTeam">
        <Img src={Qteam().bg} type="bg">
        {/*   <h2>team</h2> */}

          <div className="sliderContainer">
          <Swiper
             autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
            loop
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 500,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {/*   {Qteam().map((mapa: []) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <div className="sliderContariner">
                <Img src={mapa} />
              </div>
            </SwiperSlide>
          )
        })} */}

            <SwiperSlide>
              <Slider />
            </SwiperSlide>
                <SwiperSlide>
              <Slider />
            </SwiperSlide>
            <SwiperSlide>
              <Slider />
            </SwiperSlide>
            <SwiperSlide>
              <Slider />
            </SwiperSlide>
            <SwiperSlide>
              <Slider />
            </SwiperSlide>
            <SwiperSlide>
              <Slider />
            </SwiperSlide>
            <SwiperSlide>
              <Slider />
            </SwiperSlide>
          </Swiper>
          </div>
        </Img>
      </section>
    </>
  )
}

export default Team
