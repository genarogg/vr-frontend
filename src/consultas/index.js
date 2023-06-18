import { graphql, useStaticQuery } from "gatsby"

const Consultas = () => {
  const {
    background,
    logoHome,
    logo,
    bandera,
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
    nftSel,
    nftArt,
    vueltarapida,
    cap1,
    cap2,
    cap3,
    escuderia1,
    escuderia2,
    escuderia3,
    escuderia4,
    escuderia5,
  } = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: {
          eq: "home/blurred-traffic-light-trails-on-road-1-scaled.jpg"
        }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 1920
            height: 1080
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }

      logoHome: file(relativePath: { eq: "home/logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 798
            quality: 100
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      logo: file(relativePath: { eq: "home/logo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 250
            quality: 100
            placeholder: BLURRED
            formats: WEBP
          )
          original {
            src
          }
        }
      }

      bandera: file(relativePath: { eq: "home/fla.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 200
            quality: 100
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista1: file(relativePath: { eq: "home/mapas/pista1.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista2: file(relativePath: { eq: "home/mapas/pista2.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista3: file(relativePath: { eq: "home/mapas/pista3.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista4: file(relativePath: { eq: "home/mapas/pista4.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista5: file(relativePath: { eq: "home/mapas/pista5.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista6: file(relativePath: { eq: "home/mapas/pista6.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista7: file(relativePath: { eq: "home/mapas/pista7.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pista8: file(relativePath: { eq: "home/mapas/pista8.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 360
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      pit: file(relativePath: { eq: "home/pit.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 300
            quality: 90
            placeholder: BLURRED
            formats: WEBP
          )
        }
      }
      nftBg: file(relativePath: { eq: "nfts/nfts.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 1920
            placeholder: BLURRED
            formats: WEBP
            quality: 90
          )
        }
      }

      nftSel: file(relativePath: { eq: "nfts/nft-sel.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 500
            height: 500
            placeholder: BLURRED
            formats: WEBP
            quality: 100
          )
        }
      }
      nftArt: file(relativePath: { eq: "nfts/nft-art.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 500
            height: 500
            placeholder: BLURRED
            formats: WEBP
            quality: 100
          )
        }
      }

      vueltarapida: file(relativePath: { eq: "whitepaper/vueltarapida.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      cap1: file(relativePath: { eq: "whitepaper/cap1.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      cap2: file(relativePath: { eq: "whitepaper/cap2.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      cap3: file(relativePath: { eq: "whitepaper/cap3.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }

      escuderia1: file(relativePath: { eq: "whitepaper/escuderia1.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      escuderia2: file(relativePath: { eq: "whitepaper/escuderia2.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      escuderia3: file(relativePath: { eq: "whitepaper/escuderia3.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      escuderia4: file(relativePath: { eq: "whitepaper/escuderia4.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
        }
      }
      escuderia5: file(relativePath: { eq: "whitepaper/escuderia5.jpg" }) {
        sharp: childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: WEBP)
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
    background: background.sharp,
    logoHome: logoHome.sharp,
    logo: logo.sharp,
    logoOriginal: logo.sharp.original.src,
    bandera: bandera.sharp,
    mapas,
    pit: pit.sharp,
    nftBg: nftBg.sharp,
    nftSel: nftSel.sharp,
    nftArt: nftArt.sharp,
    vueltarapida,
    cap1,
    cap2,
    cap3,
    escuderia1,
    escuderia2,
    escuderia3,
    escuderia4,
    escuderia5,
  }

  return data
}

export default Consultas
