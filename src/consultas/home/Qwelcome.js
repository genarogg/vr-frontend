import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bg, logo, patter } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "home/bg-welcome.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }

      logo: file(relativePath: { eq: "global/vr-logotipo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 800, formats: WEBP)
        }
      }

      patter: file(relativePath: { eq: "home/patter.png" }) {
        sharp: childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  console.log(patter.original)

  const data = {
    logo: logo.sharp,
    bg: bg.sharp,
    patter: patter.original,
  }

  return data
}

export default Qwelcome
