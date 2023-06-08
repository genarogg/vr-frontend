import { graphql, useStaticQuery } from "gatsby"

const Consultas = () => {
  const { background, logoHome, logo,bandera } = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: {
          eq: "home/blurred-traffic-light-trails-on-road-1-scaled.jpg"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 1920
            height: 1080
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }

      logoHome: file(relativePath: { eq: "home/logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 798
            quality: 100
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      logo: file(relativePath: { eq: "home/logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 130
            quality: 100
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }

      bandera: file(relativePath: { eq: "home/fla.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 200
            quality: 100
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
    }
  `)

  const data = {
    background: background.sharp,
    logoHome: logoHome.sharp,
    logo: logo.sharp,
    bandera: bandera.sharp,
  }

  return data
}

export default Consultas
