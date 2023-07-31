import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bg404 } = useStaticQuery(graphql`
    query {
      bg404: file(relativePath: { eq: "404/page404.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const data = {
    bg404: bg404.sharp,
  }

  return data
}

export default Qwelcome
