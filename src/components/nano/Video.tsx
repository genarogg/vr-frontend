import React, { useEffect } from "react"

export interface VideoProps {
  css?: string
  id?: string
  src: string
}

const Video: React.FunctionComponent<VideoProps> = ({
  css = "",
  id = "",
  src,
}) => {
  useEffect(() => {
    const video = document.getElementById(id)!

    //@ts-ignore
    video.play().then(() => {
        console.log("El video se ha iniciado correctamente")
      })
      .catch(error => {
        console.error("Se ha producido un error al iniciar el video:", error)
      })
  }, [])

  return <video src={src} id={id} controls loop autoPlay></video>
}

export default Video
