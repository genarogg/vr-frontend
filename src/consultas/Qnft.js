import { graphql, useStaticQuery } from "gatsby"

const Qnft = () => {
  const { queEsUnNFT, nftSel, nftInfo, nftArt } = useStaticQuery(graphql`
    query {
      queEsUnNFT: file(relativePath: { eq: "nft/queEsNFT.md" }) {
        remark: childMarkdownRemark {
          html
        }
      }

      nftSel: file(relativePath: { eq: "nfts/nft-sel.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 500
            height: 500

            quality: 100
          )
        }
      }
      nftInfo: file(relativePath: { eq: "nft/collectionNFT.md" }) {
        remark: childMarkdownRemark {
          html
        }
      }

      nftArt: file(relativePath: { eq: "nfts/nft-art.png" }) {
        sharp: childImageSharp {
          gatsbyImageData(
            width: 500
            height: 500
            quality: 100
          )
        }
      }
    }
  `)

  const data = [
    /* Que es un NFT */
    {
      info: queEsUnNFT.remark.html,
      img: nftSel.sharp,
    },
    /* nftArt */
    {
      info: nftInfo.remark.html,
      img: nftArt.sharp,
    },
  ]

  return data
}

export default Qnft
