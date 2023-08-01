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

import { v4 as uuidv4 } from "uuid"

interface TeamProps {}

const Team: React.FunctionComponent<TeamProps> = () => {
  const Slider = ({ img, info }) => {
    const { nombre, email, linkedin, redAlternativa } = info.remark.frontmatter

    const redAlt = redAlternativa.split(",")

    return (
      <>
        <div className="sliderContariner">
          <Img src={img} />
          <h3 className="name">{nombre}</h3>

          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: info.remark.htmlAst.children[0].children[0].value,
            }}
          ></p>
          <div className="contacto">
            <A to={email} type="a">
              <Icono css=" icon-mail github"></Icono>
            </A>{" "}
            <A to={linkedin} type="a">
              <Icono css=" icon-linkedin linkedin"></Icono>
            </A>
            <A to={redAlt[0]} type="a">
              <Icono css={redAlt[1]}></Icono>
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
              {Qteam().team.map(miembro => {
                return (
                  <SwiperSlide key={uuidv4()}>
                    <div className="">
                      <Slider img={miembro.img} info={miembro.info} />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </Img>
      </section>
    </>
  )
}

export default Team
