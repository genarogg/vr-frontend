import { graphql, useStaticQuery } from "gatsby"

const Qdownloader = () => {
  const { bg, imgAndroid, infoAndroid, imgWindows, infoWindows } =
    useStaticQuery(graphql`
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
      }
    `)

  const data = {
    bg: bg.sharp,
    info: [
      { img: imgAndroid.sharp, info: infoAndroid },
      { img: imgAndroid.sharp, info: infoAndroid },
      { img: imgWindows.sharp, info: infoWindows },
    ],
  }

  return data
}

export default Qdownloader
