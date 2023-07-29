import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bg, logo } = useStaticQuery(graphql`
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
    }
  `)

  const data = {
    logo: logo.sharp,
    bg: bg.sharp,
  }

  return data
}

export default Qwelcome
