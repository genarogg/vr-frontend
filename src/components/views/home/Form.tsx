import React from "react"
import axios from "axios"
import $ from "../../../functions/$"

interface FromProps {}

const From: React.FunctionComponent<FromProps> = () => {
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
  return (
    <>
      

      <div className="login-box">
        {/* <h2>Login</h2> */}
        <form>
          <div className="user-box input" id="containerName">
            <span className="ico icon-user"></span>
            <input type="text" id="name2" required />
            <label>nombre</label>
          </div>

          <div className="user-box input" id="containerEmail">
            <span className="ico icon-mail"></span>
            <input type="email" name="" id="email" required />

            <label>Email</label>
          </div>

          <fieldset>
            <ul>
              <li>
                {" "}
                <input
                  type="radio"
                  /* id="contactChoice1" */
                  name="sexo"
                  value="Hombre"
                  id="f-option"
                />
                <div className="check"></div>
                <label htmlFor="f-option">Hombre</label>
              </li>

              <li>
                <input
                  type="radio"
                  /* id="contactChoice2" */
                  name="sexo"
                  value="Mujer"
                  id="s-option"
                />
                <div className="check">
                  {/* <div className="inside"></div >*/}
                </div>
                {/*  */}
                <label htmlFor="s-option">Mujer</label>
              </li>
            </ul>
          </fieldset>
          <button
            id="btnSubmit"
            className="btnSubmit"
            onClick={e => {
              enviarRegistro(e)
            }}
          >
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Descargar Juego
            </a>
          </button>
        </form>
      </div>
    </>
  )
}

export default From
