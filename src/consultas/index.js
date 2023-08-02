import { graphql, useStaticQuery } from "gatsby"

const Consultas = () => {
  const {
    logoHome,
    logo,

    pit,
    nftBg,

    vueltarapida,
  } = useStaticQuery(graphql`
    query {
      logoHome: file(relativePath: { eq: "home/logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 798, quality: 100)
        }
      }
      logo: file(relativePath: { eq: "home/logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 250, quality: 100)
          original {
            src
          }
        }
      }

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
    logoHome: logoHome.sharp,
    logo: logo.sharp,
    logoOriginal: logo.sharp.original.src,

    pit: pit.sharp,
    nftBg: nftBg.sharp,
    vueltarapida,
  }

  return data
}

export default Consultas
