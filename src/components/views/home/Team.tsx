import React from "react"
import { v4 as uuidv4 } from "uuid"

import Section from "./Section"
import Img from "../../nano/Img"
import Qteam from "../../../consultas/Qteam"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css"

interface TeamProps {}

const Team: React.FunctionComponent<TeamProps> = () => {
  return (
    <Section id="team" css="team" title="team">
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
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {Qteam().map((mapa: []) => {
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

export default Team
