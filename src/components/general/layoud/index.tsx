import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../../../css/style.scss"

interface LayoutProps {
  children: any
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="containerAll">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
