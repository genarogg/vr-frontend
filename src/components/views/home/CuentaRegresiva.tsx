import React, { FunctionComponent } from "react"

interface CuentaRegresivaProps {}

const CuentaRegresiva: FunctionComponent<CuentaRegresivaProps> = () => {
  return (
    <>
      <section
        id="cuentaRegresiva"
        className="cuenta-regresiva"
        /* onMouseMove={e => {
          $moveComponent(e, "bgVideo")
        }} */
      >
        <h2>YA ESTAMOS EN CUENTA REGRESIVA</h2>
        {/* <Img type="bg" src={Qhome().bgVideo} id="bgVideo"> */}
        {/* <Video src={videoCuentaRegresiva} id="cuentaRegresivaVideo"></Video> */}
        <div id="cuentaRegresivaVideo">
          <iframe
            className="yt"
            src="https://www.youtube.com/embed/QhJ0sQHW4mk"
            title="Vuelta Rápida Game."
            frameBorder="0"
            allow="accelerometer; autoplay='true'; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {/* </Img> */}
      </section>
    </>
  )
}

export default CuentaRegresiva
