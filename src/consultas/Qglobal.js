import { graphql, useStaticQuery } from "gatsby"

const Qglobal = () => {
  const { logo, patter } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "global/vr-logotipo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 280, quality: 100)
        }
      }
      patter: file(relativePath: { eq: "home/patron-abstrat.avif" }) {
        sharp: childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  const data = {
    logo: logo.sharp,
    patter: patter.sharp,
  }

  return data
}

export default Qglobal
