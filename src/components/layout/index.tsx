import React from "react"
import "../../css/style.scss"
import "../../css/lib/icomoon/style.css"
import Header from "./Header"
import Footer from "./Footer"
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
      <Header />
      {headerNofixed ? <div className="headerNoFixed"></div> : null}
      <main id="main" className="main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export function Head() {
  return (
    <>
      {" "}
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
