import { graphql, useStaticQuery } from "gatsby"

const Qwelcome = () => {
  const { bgVideo } = useStaticQuery(graphql`
    query {
      bgVideo: file(relativePath: { eq: "home/bg-video.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const data = {
    bgVideo: bgVideo.sharp,
  }

  return data
}

export default Qwelcome
