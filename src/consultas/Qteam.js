import { graphql, useStaticQuery } from "gatsby"

const Qteam = () => {
  const { bg, genarogg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "home/team/bg-team.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 1920
            height: 1080
            
            
            quality: 100
          )
        }
      }

      genarogg: file(relativePath: { eq: "home/team/genarogg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
    }
  `)

  const team = [
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
  ]

  const data = {
    team,
    bg: bg.sharp,
  }

  return data
}

export default Qteam
