import { graphql, useStaticQuery } from "gatsby"

const Qhome = () => {
  const { bgVideo, bgVehiculos,openImg } = useStaticQuery(graphql`
    query {
      bgVideo: file(relativePath: { eq: "home/bg-video.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
      bgVehiculos: file(relativePath: { eq: "home/bg-vehiculos.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }

      openImg: file(relativePath: { eq: "home/open-img.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const data = {
    bgVideo: bgVideo.sharp,
    bgVehiculos: bgVehiculos.sharp,
    openImg: openImg.sharp.gatsbyImageData.images.fallback.src,
  }

  return data
}

export default Qhome
