import { graphql, useStaticQuery } from "gatsby"

const Qdownloader = () => {
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "downloader/bg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 1920, height: 1080,  quality: 100)
        }
      }
    }
  `)

  const data = {
    bg: bg.sharp,
  }

  return data
}

export default Qdownloader
