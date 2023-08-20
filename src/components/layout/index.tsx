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
      {/*     <a
            style={{
              position: "fixed",
              bottom: "0",
              right: "0",
              zIndex: "10000000000",

              width: "104px",
              height: " 53px",
              display: "flex",
              background: "#1e1e1e",

              justifyContent: "center",
              alignItems: "center",
              borderRadius: "30px 0 0 0",
            }}
            href="https://minteo.vueltarapida.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mintear
          </a> */}
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
