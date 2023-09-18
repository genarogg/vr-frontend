import React, { useContext, FunctionComponent } from "react"
import Qwelcome from "../../../consultas/home/Qwelcome"
import Img from "../../nano/Img"

import AuthContext from "../../../context/autenticacion/authContext"
import A from "../../nano/A"

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const { autenticado, usuario } = useContext(AuthContext)

  return (
    <>
      <div className={`welcome`} id="welcome">
        <Img type="bg" src={Qwelcome().bg} css="background">
          <div className="container">
            <Img src={Qwelcome().logo} />
            {autenticado && usuario ? (
              <A css="toDemo" to="/demo">
                Demo
              </A>
            ) : (
              <A css="toDemo" to="/login">
                Login
              </A>
            )}
          </div>
        </Img>
      </div>
    </>
  )
}

export default Welcome
