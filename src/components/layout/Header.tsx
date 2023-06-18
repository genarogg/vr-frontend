import React from "react"
import A from "../nano/A"
import Img from "../nano/Img"
import consultas from "../../consultas"



interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="header" id="header">
      <div className="logo">
        <A to="/">
          <Img src={consultas().logo} />
          {/* {console.log(consultas().logoOriginal)} */}
          {/* <img src={consultas().logoOriginal}  alt="" /> */}
        </A>
      </div>
      <nav>
        <ul>
          <li>
            <A to="/">Inicio</A>
          </li>
          <li>
            <A to="/nfts">NFTs</A>
          </li>
          <li>
            <A to="/dsp">DSP</A>
          </li>
          <li>
            <A to="/whitepaper">Whitepaper</A>
          </li>
          <li>
            <A to="https://desincryp.com/" type="a" >Desincryp</A>
          </li>
         {/*  <li>
            <A to="#">Idioma</A>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
