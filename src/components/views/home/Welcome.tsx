import React, { FunctionComponent } from "react"
import consultas from "../../../consultas"
import A from "../../nano/A"
import Img from "../../nano/Img"
import $, { $toggle } from "../../../functions/$"
import axios from "axios"

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
  const registro = () => {
    $toggle("home-bg", "iniciar-seccion")
  }

  const enviarRegistro = e => {
    e.preventDefault()
    //@ts-ignorex
    const gender = document.querySelector('input[name="sexo"]:checked').value
    console.log(gender)
    let data = {
      //@ts-ignorex
      name: $("name2").value,
      //@ts-ignorex
      email: $("email").value,
      sexo: gender,
    }
    console.log(data)

    axios
      .post("https://vuelta-rapida-back.onrender.com/api/tasks", data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  /*   const sexoValue = (e, valor) => {
    e.preventDefault()

    return valor
  } */

  return (
    <div className="home-background" id="home-bg">
      <Img type="bg" src={consultas().background} css="background">
        <div className="contain">
          <Img src={consultas().logoHome} />

          <form id="formRegister">
            <div className="input" id="containerName">
              <label htmlFor="name2">
                <span className="ico icon-user"></span>
              </label>
              <input type="text" id="name2" placeholder="nombre" />
            </div>

            <div className="input" id="containerEmail">
              <label htmlFor="email">
                <span className="ico icon-mail"></span>
              </label>
              <input type="email" id="email" placeholder="email" />
            </div>

            <fieldset>
              <legend>sexo</legend>
              <div>
                <div className="radioGrup">
                  <input
                    type="radio"
                    id="contactChoice1"
                    name="sexo"
                    value="Hombre"
                    checked
                  />
                  <label htmlFor="contactChoice1">Hombre</label>
                </div>
                <div className="radioGrup">
                  <input
                    type="radio"
                    id="contactChoice2"
                    name="sexo"
                    value="Mujer"
                  />
                  <label htmlFor="contactChoice2">Mujer</label>
                </div>
              </div>
            </fieldset>

            {/* <fieldset>
    <legend>Please select your preferred contact method:</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Email</label>

      <input type="radio" id="contactChoice2" name="contact" value="phone" />
      <label for="contactChoice2">Phone</label>

     
    </div>
  
  </fieldset>
 */}
            <button
              id="btnSubmit"
              className="btnSubmit"
              onClick={e => {
                enviarRegistro(e)
              }}
            >
              Descargar Juego
            </button>
          </form>
        </div>

        <div className="iniciar-juego">
          <A to="#">
            <button
              onClick={() => {
                registro()
              }}
            >
              Juega Ahora
            </button>
          </A>
        </div>
      </Img>
    </div>
  )
}

export default Welcome
