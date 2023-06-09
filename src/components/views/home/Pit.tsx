import React from "react"
import consultas from "../../../consultas"
import Section from "../../general/Section"
import Icono from "../../nano/Icono"
import Img from "../../nano/Img"

interface PitProps {}

const Pit: React.FunctionComponent<PitProps> = () => {
  return (
    <Section id="Pit" css="pit" title="Detalles Claves de los Pit">
      <Img src={consultas().pit}></Img>

      <div className="containerPit">
        <div className="caracteristica">
          <Icono css="icon-download"></Icono> <h2>Sin descargas adicionales</h2>
          <p>
            Sin descargas adicionales, solo descargaras nuestro aplicativo para
            jugar desde tu Android y nuestra Wallet, para quienes les gustaría
            manejar su cuenta desde su móvil, no debes descargas nada
            adicionales fuera de nuestro proyecto.
          </p>
        </div>

        <div className="caracteristica">
          <Icono css="icon-notice"></Icono> <h2>Sin descargas adicionales</h2>
          <p>
            Sin descargas adicionales, solo descargaras nuestro aplicativo para
            jugar desde tu Android y nuestra Wallet, para quienes les gustaría
            manejar su cuenta desde su móvil, no debes descargas nada
            adicionales fuera de nuestro proyecto.
          </p>
        </div>

        <div className="caracteristica">
          <Icono css="icon-database"></Icono>
          <h2>Sin descargas adicionales</h2>
          <p>
            Sin descargas adicionales, solo descargaras nuestro aplicativo para
            jugar desde tu Android y nuestra Wallet, para quienes les gustaría
            manejar su cuenta desde su móvil, no debes descargas nada
            adicionales fuera de nuestro proyecto.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Pit
