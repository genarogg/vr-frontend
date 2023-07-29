import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bgVideo, bgVehiculos } = useStaticQuery(graphql`
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
    }
  `)

  const data = {
    bgVideo: bgVideo.sharp,
    bgVehiculos: bgVehiculos.sharp,
  }

  return data
}

export default Qwelcome
