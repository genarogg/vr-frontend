import { graphql, useStaticQuery } from "gatsby"

const Qdemo = () => {
  const {
    bg,
    imgAndroid,
    infoAndroid,
    imgWindows,
    infoWindows,
    imgOnline,
    infoOnline,
  } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "downloader/bg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 1920, height: 1080, quality: 100)
        }
      }
      imgAndroid: file(
        relativePath: { eq: "downloader/icono-de-descarga-apk.png" }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 100)
        }
      }
      infoAndroid: file(relativePath: { eq: "downloader/android.md" }) {
        remark: childMarkdownRemark {
          htmlAst
          frontmatter {
            titulo
            tipo
            link
          }
        }
      }

      imgWindows: file(
        relativePath: { eq: "downloader/icono-de-descarga-windows.png" }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 100)
        }
      }
      infoWindows: file(relativePath: { eq: "downloader/windows.md" }) {
        remark: childMarkdownRemark {
          htmlAst
          frontmatter {
            titulo
            tipo
            link
          }
        }
      }
      imgOnline: file(
        relativePath: { eq: "downloader/icono-jugar-online.png" }
      ) {
        sharp: childImageSharp {
          gatsbyImageData(width: 360, quality: 100)
        }
      }
      infoOnline: file(relativePath: { eq: "downloader/online.md" }) {
        remark: childMarkdownRemark {
          htmlAst
          frontmatter {
            titulo
            tipo
            link
          }
        }
      }
    }
  `)

  const data = {
    bg: bg.sharp,
    info: [
      { img: imgAndroid.sharp, info: infoAndroid },
      { img: imgOnline.sharp, info: infoOnline },
      { img: imgWindows.sharp, info: infoWindows },
    ],
  }

  return data
}

export default Qdemo
