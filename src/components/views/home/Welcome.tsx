import React, { useContext, FunctionComponent } from "react"
import Qwelcome from "../../../consultas/home/Qwelcome"
import A from "../../nano/A"
import Img from "../../nano/Img"
import { $toggle } from "../../../functions/$"
import MyForm from "./form/MyForm"
/* import consultas from "../../../consultas" */
import AuthContext from "../../../context/autenticacion/authContext"

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const registro = () => {
    $toggle("home-bg", "iniciar-seccion")
  }

  const authContext = useContext(AuthContext)
  const { autenticado } = authContext

  return (
    <>
      <div className={`welcome`} id="welcome">
        <Img type="bg" src={Qwelcome().bg} css="background">
        {/*   <div className="container">
            <Img src={Qwelcome().bg} />

            {autenticado ? null : <MyForm />}
          </div> */}
        </Img>
      </div>
     
    </>
  )
}

export default Welcome
