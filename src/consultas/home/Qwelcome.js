import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "vr-logotipo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: WEBP
    
          )
        }
      }
    }
  `)

  const data = {
    bg: bg.sharp,
  }

  return data
}

export default Qwelcome
