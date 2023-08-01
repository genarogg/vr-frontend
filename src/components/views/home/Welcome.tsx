import React, { useContext, FunctionComponent } from "react"
import Qwelcome from "../../../consultas/home/Qwelcome"
import Img from "../../nano/Img"
import MyForm from "./form/MyForm"
import AuthContext from "../../../context/autenticacion/authContext"


interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
 


  const { autenticado } = useContext(AuthContext)


  return (
    <>
      <div className={`welcome`} id="welcome">
        <Img type="bg" src={Qwelcome().bg} css="background">
          <div className="container" >
            <Img src={Qwelcome().logo} />

            {autenticado ? null : <MyForm />}

           {/*  <button
              
              className="activeForm"
            >
              login
            </button> */}
          </div>
        </Img>
      </div>
    </>
  )
}

export default Welcome
