import React from "react"
import consultas from "../../../consultas"
import Section from "./Section"
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
            Al salir al público nuestro primer video juego NFT Vuelta Rápida,
            con todas sus correcciones, dejaremos una versión gratuita en la
            web, con la que podrás jugar y sentir la adrenalina con tus
            familiares y amigos, corriendo vehículos de las escuderías Desincryp
            y Bstarll, para competir en los circuitos mas adrenalinicos, las
            pistas no estarán en las islas sino en Pekín capital de china.
          </p>
        </div>

        <div className="caracteristica">
          <Icono css="icon-database"></Icono>
          <h2>Sin descargas adicionales</h2>
          <p>
            Al hacer un swap de nuestra moneda interna por Token o una
            establecoin, se cobra una comisión baja casi imperceptible, igual si
            deseas enviar moneda interna a otro usuario o pagar desde nuestra
            Wallet a otro usuario, la comisión es imperceptible, puedes mirar la
            tabla de comisiones al final del menú del White Paper opción;
            comisiones.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Pit
