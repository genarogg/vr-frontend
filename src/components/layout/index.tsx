import React from "react"
import "../../css/style.scss"
import "../../css/lib/icomoon/style.css"
import Header from "./Header"
import Footer from "./Footer"

import SpinnerLoader from "./SpinnerLoader"
import Qwelcome from "../../consultas/home/Qwelcome"
import AuthState from "../../context/autenticacion/authState"
interface LayoutProps {
  children?: any
  headerNofixed?: boolean
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  headerNofixed = false,
}) => {
  return (
    <>
      <AuthState>
        <SpinnerLoader
          colorFondo="#fff"
          colorBarra="#b03535"
          logo={Qwelcome().spinner}
          backgroundColors="#2d007e"
        />
        <Header />
        {headerNofixed ? <div className="headerNoFixed"></div> : null}
        <main id="main" className="main">
          {children}
        </main>
        <Footer />
      </AuthState>
    </>
  )
}

export function Head() {
  return (
    <>
      <link
        rel="shortcut icon"
        href="/src/img/favicon.png"
        type="image/x-icon"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </>
  )
}

export default Layout
