import React from "react"
import A from "../nano/A"
import Icono from "../nano/Icono"

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer id="footer" className="footer">
      <div></div>
      <p>Copyright © 2023 vueltarapida.net</p>
      <ul>
        <li>
          <A to="#">
            <Icono css="icon-instagram"></Icono>
          </A>
        </li>
        <li>
          <A to="#">
            <Icono css="icon-twitter"></Icono>
          </A>
        </li>
        <li>
          <A to="#">
            <Icono css="icon-envelop"></Icono>
          </A>
        </li>
        <li>
          <A to="#">
            <Icono css="icon-telegram"></Icono>
          </A>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
