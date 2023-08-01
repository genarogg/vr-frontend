import { graphql, useStaticQuery } from "gatsby"

const Consultas = () => {
  const {
    logoHome,
    logo,
    pista1,
    pista2,
    pista3,
    pista4,
    pista5,
    pista6,
    pista7,
    pista8,
    pit,
    nftBg,

    vueltarapida,
    cap1,
    cap2,
    cap3,
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

      pista1: file(relativePath: { eq: "home/mapas/pista1.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista2: file(relativePath: { eq: "home/mapas/pista2.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista3: file(relativePath: { eq: "home/mapas/pista3.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista4: file(relativePath: { eq: "home/mapas/pista4.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista5: file(relativePath: { eq: "home/mapas/pista5.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista6: file(relativePath: { eq: "home/mapas/pista6.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista7: file(relativePath: { eq: "home/mapas/pista7.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
        }
      }
      pista8: file(relativePath: { eq: "home/mapas/pista8.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 90)
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
      cap1: file(relativePath: { eq: "whitepaper/cap1.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
      cap2: file(relativePath: { eq: "whitepaper/cap2.png" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
      cap3: file(relativePath: { eq: "whitepaper/cap3.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  const mapas = [
    pista1.sharp,
    pista2.sharp,
    pista3.sharp,
    pista4.sharp,
    pista5.sharp,
    pista6.sharp,
    pista7.sharp,
    pista8.sharp,
  ]

  const data = {
    logoHome: logoHome.sharp,
    logo: logo.sharp,
    logoOriginal: logo.sharp.original.src,

    mapas,
    pit: pit.sharp,
    nftBg: nftBg.sharp,

    vueltarapida,
    cap1,
    cap2,
    cap3,
  }

  return data
}

export default Consultas
