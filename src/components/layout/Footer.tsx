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
            to="https://www.instagram.com/vueltarapidagame/"
            type="a"
          >
            <Icono css="icon-instagram instagram"></Icono>
          </A>
        </li>
        <li>
          <A to="https://twitter.com/vueltarapidagam" type="a">
            <Icono css="icon-twitter twitter"></Icono>
          </A>
        </li>
        <li>
          <A to="mailto:team@vueltarapida.net" type="a">
            <Icono css="icon-mail  github"></Icono>
          </A>
        </li>
        <li>
          <A to="https://t.me/vueltarapidagame" type="a">
            <Icono css="icon-telegram telegram"></Icono>
          </A>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
