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
          <A
            to="https://instagram.com/vuelatrapidagame?igshid=YmMyMTA2M2Y="
            type="a"
          >
            <Icono css="icon-instagram"></Icono>
          </A>
        </li>
        <li>
          <A to="https://twitter.com/vueltarapidagam" type="a">
            <Icono css="icon-twitter"></Icono>
          </A>
        </li>
        <li>
          <A to="mailto:contactogame@vueltarapida.net" type="a">
            <Icono css="icon-envelop"></Icono>
          </A>
        </li>
        <li>
          <A to="https://t.me/vueltarapid" type="a">
            <Icono css="icon-telegram"></Icono>
          </A>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
