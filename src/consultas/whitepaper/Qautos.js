import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { jerico2j, spartan, grigora, eros } = useStaticQuery(graphql`
    query {
      jerico2j: file(relativePath: { eq: "whitepaper/jerico-2j.webp" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
      spartan: file(relativePath: { eq: "whitepaper/spartan.webp" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
      grigora: file(relativePath: { eq: "whitepaper/grigora.webp" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }

      eros: file(relativePath: { eq: "whitepaper/eros.webp" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const data = {
    jerico2j: jerico2j.sharp,
    spartan: spartan.sharp,
    grigora: grigora.sharp,
    eros: eros.sharp,
  }

  return data
}

export default Qwelcome
