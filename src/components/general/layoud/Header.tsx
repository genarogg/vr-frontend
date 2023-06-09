import React from "react"
import A from "../../nano/A"
import Img from "../../nano/Img"
import consultas from "../../../consultas"

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <div className="logo">
        <A to="/">
          <Img src={consultas().logo} />
        </A>
      </div>
      <nav>
        <ul>
          <li>
            <A to="#">Inicio</A>
          </li>
          <li>
            <A to="#">NFTs</A>
          </li>
          <li>
            <A to="#">DSP</A>
          </li>
          <li>
            <A to="#">Whitepaper</A>
          </li>
          <li>
            <A to="#">Desincryp</A>
          </li>
          <li>
            <A to="#">Idioma</A>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
