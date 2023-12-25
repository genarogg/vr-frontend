import { graphql, useStaticQuery } from "gatsby"

const Qteam = () => {
  const {
    bg,
    imgGenarogg,
    infoGenarogg,
    /* imgDurman,
    infoDurman,
    imgLuis,
    infoLuis, */
    imgJairo,
    infoJairo,
    imgRicardo,
    infoRicardo,
    imgJuan,
    infoJuan,
  } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "home/team/bg-team.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 1920, height: 1080, quality: 100)
        }
      }

      imgGenarogg: file(relativePath: { eq: "home/team/genarogg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoGenarogg: file(relativePath: { eq: "home/team/genarogg.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            nombre
            email
            linkedin
            redAlternativa
          }
        }
      }
      imgDurman: file(relativePath: { eq: "home/team/durman.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoDurman: file(relativePath: { eq: "home/team/durman.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            nombre
            email
            linkedin
            redAlternativa
          }
        }
      }
      imgJairo: file(relativePath: { eq: "home/team/jairo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoJairo: file(relativePath: { eq: "home/team/jairo.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            nombre
            email
            linkedin
            redAlternativa
          }
        }
      }
      imgLuis: file(relativePath: { eq: "home/team/genarogg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoLuis: file(relativePath: { eq: "home/team/luis.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            nombre
            email
            linkedin
            redAlternativa
          }
        }
      }
      imgRicardo: file(relativePath: { eq: "home/team/ricardo.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoRicardo: file(relativePath: { eq: "home/team/ricardo.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            nombre
            email
            linkedin
            redAlternativa
          }
        }
      }
      imgJuan: file(relativePath: { eq: "home/team/juan.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoJuan: file(relativePath: { eq: "home/team/juan.md" }) {
        remark: childMarkdownRemark {
          html
          frontmatter {
            nombre
            email
            linkedin
            redAlternativa
          }
        }
      }
    }
  `)

  const team = [
    { img: imgGenarogg.sharp, info: infoGenarogg },
    /* { img: imgDurman.sharp, info: infoDurman }, */
    { img: imgJairo.sharp, info: infoJairo },
    /* { img: imgRicardo.sharp, info: infoRicardo }, */
    { img: imgJuan.sharp, info: infoJuan },
    /*  */
    { img: imgGenarogg.sharp, info: infoGenarogg },
    /* { img: imgDurman.sharp, info: infoDurman }, */
    { img: imgJairo.sharp, info: infoJairo },
    /* { img: imgRicardo.sharp, info: infoRicardo }, */
    /* { img: imgLuis.sharp, info: infoLuis }, */
    { img: imgJuan.sharp, info: infoJuan },
    { img: imgGenarogg.sharp, info: infoGenarogg },
    /* { img: imgDurman.sharp, info: infoDurman }, */
    { img: imgJairo.sharp, info: infoJairo },
    /* { img: imgRicardo.sharp, info: infoRicardo }, */
    { img: imgJuan.sharp, info: infoJuan },
    /*  */
    { img: imgGenarogg.sharp, info: infoGenarogg },
    /* { img: imgDurman.sharp, info: infoDurman }, */
    { img: imgJairo.sharp, info: infoJairo },
    /* { img: imgRicardo.sharp, info: infoRicardo }, */
    /* { img: imgLuis.sharp, info: infoLuis }, */
    { img: imgJuan.sharp, info: infoJuan },
    
  ]

  const data = {
    bg: bg.sharp,
    team,
  }

  return data
}

export default Qteam
