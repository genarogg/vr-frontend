import { graphql, useStaticQuery } from "gatsby"

const Consultas = () => {
  const { pista1, pista2, pista3, pista4 } = useStaticQuery(graphql`
    query {
      pista1: file(relativePath: { eq: "home/mapas/pista-hielo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista2: file(relativePath: { eq: "home/mapas/ciudad.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista3: file(relativePath: { eq: "home/mapas/pista-tokio.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista4: file(relativePath: { eq: "home/mapas/pista-tokio-noche.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
    }
  `)

  const mapas = [
    pista1.sharp,
    pista2.sharp,
    pista3.sharp,
    pista4.sharp,
    pista1.sharp,
    pista2.sharp,
    pista3.sharp,
    pista4.sharp,
  ]

  const data = {
    mapas,
  }

  return data
}

export default Consultas
