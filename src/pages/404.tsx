import * as React from "react"
import Img from "../components/nano/Img"

import Q404 from "../consultas/Q404"
import { Link, navigate } from "gatsby"

const NotFoundPage = () => (
  <>
    <div className="page404">
      <Img src={Q404().bg404}></Img>
      <button
        onClick={() => {
          window!.history.back()
        }}
      >
        regresar
      </button>
    </div>
  </>
)

export default NotFoundPage
