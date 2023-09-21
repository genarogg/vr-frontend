import { graphql, useStaticQuery } from "gatsby"

const Consultas = () => {
  const {
    pit,
    nftBg,
    vueltarapida,
  } = useStaticQuery(graphql`
    query {
      pit: file(relativePath: { eq: "home/pit.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 300, quality: 90)
        }
      }
      nftBg: file(relativePath: { eq: "nfts/nfts.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 1920

            quality: 90
          )
        }
      }

      vueltarapida: file(relativePath: { eq: "whitepaper/vueltarapida.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const data = {


    pit: pit.sharp,
    nftBg: nftBg.sharp,
    vueltarapida,
  }

  return data
}

export default Consultas
