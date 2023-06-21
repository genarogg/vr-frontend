import React from "react"
import axios from "axios"

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
      {/* <form id="formRegister">
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
        <button
          id="btnSubmit"
          className="btnSubmit"
          onClick={e => {
            enviarRegistro(e)
          }}
        >
          Descargar Juego
        </button>
      </form> */}

      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />

            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  )
}

export default From
