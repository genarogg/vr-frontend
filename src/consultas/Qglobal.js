import { graphql, useStaticQuery } from "gatsby"

const Qglobal = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "global/vr-logotipo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 280
            quality: 100
          )
        }
      }
    }
  `)

  const data = {
    logo: logo.sharp,
  }

  return data
}

export default Qglobal
