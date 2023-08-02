import React, { useState } from "react"

import Img from "../../nano/Img"
import Icono from "../../nano/Icono"
import Layout from "../../layout"
import consultas from "../../../consultas"
//@ts-ignore
import Qinfo from "../../../consultas/whitepaper/Qinfo"
import { $classList, $toggle } from "../../../functions/$"

import { v4 as uuidv4 } from "uuid"

interface WhitepaperProps {}

const Whitepaper: React.FunctionComponent<WhitepaperProps> = () => {
  const [myInfo, setMyInfo] = useState(Qinfo().secciones[0].info)

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
              {Qinfo().secciones.map(seccion => {
                return (
                  <li key={uuidv4()}>
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
                <div
                  className="info"
                  dangerouslySetInnerHTML={{ __html: myInfo }}
                ></div>
              </div>
            </div>
          </Img>
        </div>
      </Layout>
    </>
  )
}

export default Whitepaper
