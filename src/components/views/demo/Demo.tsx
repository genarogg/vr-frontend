import React, { FunctionComponent, useEffect } from "react"
import RutaProtegida from "../../AuthLayout/RutaProtegida"
import Img from "../../nano/Img"
import Qdemo from "../../../consultas/Qdemo"
import { v4 as uuidv4 } from "uuid"
import A from "../../nano/A"

interface DemoProps {}

const Demo: FunctionComponent<DemoProps> = () => {
  const Card = ({ img, accion = "", titulo, info, link }) => {
    const tipoDeA = accion === "descargar" ? "a" : ""
    console.log(tipoDeA)
    return (
      <>
        {console.log(info)}
        <div className={`containerCard ${titulo}`}>
          <Img src={img} />

          <div className={`card`}>
            <h2>{titulo}</h2>
            <p dangerouslySetInnerHTML={{ __html: info }}></p>
            <button>
              {/*  */}
              <A type={tipoDeA} to={link}>
                {accion}
              </A>
            </button>
          </div>
        </div>
      </>
    )
  }

  /*   useEffect(() => {
    document.body.classList.add("downloader")
  }, []) */

  return (
    <>
      <RutaProtegida>
        <Img
          src={Qdemo().bg}
          type="bg"
          css="downloader"
          id="downloaderBg"
        >
          <div className="card-container">
            {Qdemo().info.map(element => {
              return (
                <Card
                  key={uuidv4()}
                  img={element.img}
                  accion={element.info.remark.frontmatter.tipo}
                  titulo={element.info.remark.frontmatter.titulo}
                  link={element.info.remark.frontmatter.link}
                  info={
                    element.info.remark.htmlAst.children[0].children[0].value
                  }
                />
              )
            })}
          </div>
        </Img>
      </RutaProtegida>
    </>
  )
}

export default Demo
