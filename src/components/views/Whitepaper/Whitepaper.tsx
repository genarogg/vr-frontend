import React, { useState } from "react"

import Img from "../../nano/Img"
import Icono from "../../nano/Icono"
import Layout from "../../layout"
import consultas from "../../../consultas"
//@ts-ignore
import Qwhitepaper from "../../../consultas/Qwhitepaper"
import $, { $classList, $toggle } from "../../../functions/$"

interface WhitepaperProps {}

const Whitepaper: React.FunctionComponent<WhitepaperProps> = () => {
  const imgInfo = img => {
    return `
        <div class="containerImg">
          <img src=${img.sharp.gatsbyImageData.images.fallback.src} />
        </div>
        `
  }

  

  const [myInfo, setMyInfo] = useState(Qwhitepaper().secciones[0].info)

  const activeSidebar = () => {
    $toggle("openSiderbar", "active")
  }

  const activeEliminar = () => {
    $classList("sidebar").remove("active")
  }

  const Asidebar = ({ id = "" }) => {
    return (
      <>
        <aside id={id}>
          <nav
            onClick={() => {
              activeEliminar()
            }}
          >
            <ul>
              {Qwhitepaper().secciones.map(seccion => {
                return (
                  <>
                    <li>
                      <button
                        onClick={() => {
                          setMyInfo(seccion.info)
                        }}
                      >
                        <a
                          href="#"
                          dangerouslySetInnerHTML={{ __html: seccion.titulo }}
                        ></a>
                      </button>
                    </li>
                  </>
                )
              })}
            </ul>
          </nav>
        </aside>
      </>
    )
  }

  return (
    <>
      <Layout headerNofixed={true}>
        <div className="whitepaper">
          <Img type="bg" src={consultas().nftBg} css="background" id="wpBg">
            <div className="infoPaper">
              <Asidebar id="bigAside" />
              <div className="containerInfo">
                <div
                  className="openSiderbar"
                  id="openSiderbar"
                  onClick={() => {
                    activeSidebar()
                  }}
                >
                  <Icono css="icon-menu"></Icono>
                  <Asidebar id="sidebar" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: myInfo }}></div>
              </div>
            </div>
          </Img>
        </div>
      </Layout>
    </>
  )
}

export default Whitepaper
