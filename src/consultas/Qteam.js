import { graphql, useStaticQuery } from "gatsby"

const Qteam = () => {
  const { bg, igmGenarogg, infoGenarogg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "home/team/bg-team.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 1920, height: 1080, quality: 100)
        }
      }

      igmGenarogg: file(relativePath: { eq: "home/team/genarogg.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      infoGenarogg: file(relativePath: { eq: "home/team/genarogg.md" }) {
        remark: childMarkdownRemark {
          htmlAst
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

  const team = [{ img: igmGenarogg.sharp, info: infoGenarogg }]

  const data = {
    bg: bg.sharp,
    team,
  }

  return data
}

export default Qteam
