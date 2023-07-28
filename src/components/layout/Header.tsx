import React, { useContext, useEffect } from "react"
import A from "../nano/A"
import Img from "../nano/Img"
import consultas from "../../consultas"

import $, { $toggle } from "../../functions/$"
import Icono from "../nano/Icono"
import AuthContext from "../../context/autenticacion/authContext"
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const authContext = useContext(AuthContext)
  const { usuarioAutenticado } = authContext

  /* agregar y elimina la clase menuFixed */
  const scrollHeader = () => {
    //Efecto pegajos para el header usando el movimiento del scroll
    try {
      let altura = $("header")!.offsetTop

      if (window.pageYOffset > altura) {
        $("header")!.classList.add("menu-fixed")
      } else {
        $("header")!.classList.remove("menu-fixed")
      }
    } catch (e) {}
  }

  useEffect(() => {
    window.onscroll = () => {
      scrollHeader()
    }
    usuarioAutenticado()
  }, [])

  const abrirMenu = () => {
    $toggle("navMovile", "active")
  }

  const navegacion = (css, id) => {
    return (
      <nav className={css} id={id}>
        <ul>
          <li>
            <A to="/">Inicio</A>
          </li>
          <li>
            <A to="/nfts">NFTs</A>
          </li>
          <li>
            <A to="/whitepaper">Whitepaper</A>
          </li>
          {/*  <li>
            <A to="/dsp">DSP</A>
          </li> */}

          <li>
            <A to="https://desincryp.com/" type="a">
              Desincryp
            </A>
          </li>
          {/*  <li>
          <A to="#">Idioma</A>
        </li> */}
        </ul>
      </nav>
    )
  }
  return (
    <header className="header " id="header">
      <button
        className="open-sidebar"
        onClick={() => {
          abrirMenu()
        }}
      >
        <Icono css="icon-menu"></Icono>
      </button>

      {navegacion("nav-movile", "navMovile")}
      <div className="logo">
        <A to="/">
          <Img src={consultas().logo} />
        </A>
      </div>
      {navegacion("nav-desktop", "navDesktop")}
      <div className="leftHidden"></div>
    </header>
  )
}

export default Header
