import React, { useEffect } from "react"

export interface VideoProps {
  css?: string
  id?: string
  src: string
  play?: boolean
}

const Video: React.FunctionComponent<VideoProps> = ({
  css = "",
  id = "",
  src,
  play = false,
}) => {
  useEffect(() => {
    const video = document.getElementById(id)!

    //@ts-ignore
    video
      //@ts-ignore
      .play()
      .then(() => {
        console.log("El video se ha iniciado correctamente")
      })
      .catch(error => {
        console.error("Se ha producido un error al iniciar el video:", error)
      })
  }, [])

  return <video src={src} id={id} controls loop autoPlay={play}></video>
}

export default Video
