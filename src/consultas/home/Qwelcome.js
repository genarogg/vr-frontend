import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bg, logo, patter, spinner } = useStaticQuery(graphql`
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

      spinner: file(relativePath: { eq: "global/vr-isotipo.webp" }) {
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
    bg: bg.sharp,
    patter: patter.sharp.original,
    spinner: spinner.sharp.original.src,
  }

  return data
}

export default Qwelcome
