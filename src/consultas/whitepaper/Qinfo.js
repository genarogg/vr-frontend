import { graphql, useStaticQuery } from "gatsby"

const Qinfo = () => {
  const {
    historia,
    generoDelVideoJuego,
    gamePlay,
    mecanicaDelJuego,
    diseno,
    retavilidad,
    vehiculosNFT,
  } = useStaticQuery(graphql`
    query {
      historia: file(relativePath: { eq: "whitepaper/historia.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }
      generoDelVideoJuego: file(
        relativePath: { eq: "whitepaper/generoDelVideoJuego.md" }
      ) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }

      gamePlay: file(relativePath: { eq: "whitepaper/gamePlay.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }

      mecanicaDelJuego: file(
        relativePath: { eq: "whitepaper/mecanicaDelJuego.md" }
      ) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }

      diseno: file(relativePath: { eq: "whitepaper/diseno.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }

      retavilidad: file(relativePath: { eq: "whitepaper/rentabilidad.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }

      vehiculosNFT: file(relativePath: { eq: "whitepaper/vehiculosNFT.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const secciones = [
    {
      titulo: historia.remark.frontmatter.title,
      info: historia.remark.html,
    },

    {
      titulo: generoDelVideoJuego.remark.frontmatter.title,
      info: generoDelVideoJuego.remark.html,
    },
    {
      titulo: gamePlay.remark.frontmatter.title,
      info: gamePlay.remark.html,
    },
    {
      titulo: mecanicaDelJuego.remark.frontmatter.title,
      info: mecanicaDelJuego.remark.html,
    },
    {
      titulo: diseno.remark.frontmatter.title,
      info: diseno.remark.html,
    },
    {
      titulo: retavilidad.remark.frontmatter.title,
      info: retavilidad.remark.html,
    },
    {
      titulo: vehiculosNFT.remark.frontmatter.title,
      info: vehiculosNFT.remark.html,
    },
  ]

  const data = {
    secciones,
  }

  return data
}

export default Qinfo
