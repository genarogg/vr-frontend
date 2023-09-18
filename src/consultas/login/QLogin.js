import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bgLogin } = useStaticQuery(graphql`
    query {
      bgLogin: file(relativePath: { eq: "login/bg-login.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const data = {
    bgLogin: bgLogin.sharp,
  }

  return data
}

export default Qwelcome
