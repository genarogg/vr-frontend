import React, { useContext, useEffect } from "react"
import A from "../nano/A"
import Img from "../nano/Img"
import Qglobal from "../../consultas/Qglobal"

import $, { $toggle } from "../../functions/$"
import Icono from "../nano/Icono"
import AuthContext from "../../context/autenticacion/authContext"
interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const authContext = useContext(AuthContext)
  const { usuarioAutenticado, autenticado, usuario } = authContext
  /* usuarioAutenticado() */
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

    autenticado ? document.body.classList.add("autenticado") : null
  }, [autenticado])

  const abrirMenu = () => {
    $toggle("navMovile", "active")
  }

  const navegacion = (css, id) => {
    return (
      <nav className={css} id={id}>
        <ul>
          <li>
            <A to="/">
              <Icono css="icon-home" />
              Inicio
            </A>
          </li>
          <li>
            <A to="/nfts">
              <Icono css="icon-ethereum " />
              NFTs
            </A>
          </li>
          <li>
            <A to="/whitepaper">
              <Icono css="icon-menu" />
              Whitepaper
            </A>
          </li>

          {autenticado ? (
            <li>
              <A to="/dashboard" css="user">
                <Icono css="icon-user" />
                {usuario.username}
              </A>
            </li>
          ) : (
            <li>
              <A to="/" css="user">
                <Icono css="icon-user" />
                LOGIN
              </A>
            </li>
          )}
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
          <Img src={Qglobal().logo} />
        </A>
      </div>
      {navegacion("nav-desktop", "navDesktop")}
      <div className="leftHidden"></div>
    </header>
  )
}

export default Header
