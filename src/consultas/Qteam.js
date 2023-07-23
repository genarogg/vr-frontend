import { graphql, useStaticQuery } from "gatsby"

const Qteam = () => {
  const { genarogg } = useStaticQuery(graphql`
    query {
      genarogg: file(relativePath: { eq: "home/team/genarogg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 300, formats: WEBP)
        }
      }
    }
  `)

  const data = [
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
    genarogg.sharp,
  ]

  return data
}

export default Qteam
