import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface ImgProps {
  src: any
  alt?: any
  type?: string
  css?: string
  id?: string
  children?: any
  tag?: string
  styles?: object
}

const Img: React.FunctionComponent<ImgProps> = ({
  src,
  alt = "Xiana by: Genaro Gonzalez",
  type,
  css = "",
  id = "",
  tag = "section",
  children,
  styles,
}: ImgProps) => {
  const imgSRC = getImage(src)

  if (type === "bg") {
    return (
      <>
        <span
          style={{
            display: "inherit",
            justifyContent: "inherit",
            width: "inherit",
            justifyItems: "inherit",
            marginTop: "inherit",
          }}
          className={css}
        >
          <GatsbyImage
            //@ts-ignore
            image={imgSRC}
            alt={alt}
            id={id}
            className={css}
            style={{
              position: "absolute",
              zIndex: "-10000",
              maxHeight: "100%",
              maxWidth: "100%",
              height: "100%",
              top: "0",
              left: "0",
            }}
          />
          {children}
        </span>
      </>
    )
  }

  if (type === "img") {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        id={id}
        className={css}
        style={styles}
      />
    )
  }
  //@ts-ignore
  return <GatsbyImage image={imgSRC} alt={alt} className={css} id={id} />
}
export default Img
