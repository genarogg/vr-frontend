import React, { FunctionComponent } from "react"
import RutaProtegida from "../../AuthLayout/RutaProtegida"
import Img from "../../nano/Img"
import Qdownloader from "../../../consultas/Qdownloader"
import { v4 as uuidv4 } from "uuid"
import A from "../../nano/A"

interface DownloaderProps {}

const Downloader: FunctionComponent<DownloaderProps> = () => {
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
  return (
    <>
      <RutaProtegida>
        <Img
          src={Qdownloader().bg}
          type="bg"
          css="downloader"
          id="downloaderBg"
        >
          <div className="card-container">
            {Qdownloader().info.map(element => {
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

export default Downloader
