import React, { useEffect } from "react"
import Img from "../nano/Img"

export interface spinnerLoaderProps {
  type?: string
  logo?: string
  colorBarra?: string
  colorFondo?: string
  backgroundColors?: string
}

const SpinnerLoader: React.FunctionComponent<spinnerLoaderProps> = ({
  type = "bar",
  colorBarra = "#E3E3E3",
  colorFondo = "#4D4D4D",
  logo = "",
  backgroundColors = "#282828",
}) => {
  const bar = () => {
    return (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 200 3"
        width="100%"
        height="100%"
        style={styles.svg}
      >
        <g>
          <rect style={{ fill: colorFondo }} width="200" height="3" />
          <rect style={{ fill: colorBarra }} width="50" height="3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="-60"
              to="200"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>
    )
  }

  const circle = () => {
    ;<svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 42.8 42.8"
      width="20%"
      height="20%"
    >
      <circle
        style={{ fill: "none", strokeWidth: "3", stroke: colorFondo }}
        cx="21.4"
        cy="21.4"
        r="20"
      />
      <path
        style={{
          fill: "none",
          strokeWidth: "3",
          stroke: colorBarra,
        }}
        d="M41.4,21.4c0-8.2-4.9-15.3-12-18.3"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 21.4 21.4"
          to="360 21.4 21.4"
          begin="0"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  }

  useEffect(() => {
    // Descomentar para quitar el spinner
    try {
      document.getElementById("spinner")!.style.visibility = "hidden"

      document.getElementById("spinner")!.style.opacity = "0"

      document.querySelector("html")!.style.overflow = "initial"
    } catch (error) {}
  }, [])

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          backgroundColor: `${backgroundColors}`,
          zIndex: 1000000,
          transition: "1s all ease",
        }}
        id="spinner"
      >
        {
          //@ts-ignore
          <div style={styles.box}>
            {logo != "" ? (
              <>
                <div>
                  <Img type="img" src={logo} styles={styles.logoLoader} />
                </div>
              </>
            ) : null}
            {type === "bar" ? <>{bar()}</> : <>{circle()}</>}
          </div>
        }
      </div>
    </>
  )
}

const styles = {
  svg: {
    borderRadius: "5px",
  },

  box: {
    maxWidth: "150px",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-10vh",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoLoader: {
    width: "150px",
    marginBottom: "15px",
  },
}
export default SpinnerLoader
