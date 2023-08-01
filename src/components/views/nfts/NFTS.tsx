import React from "react"
import A from "../../nano/A"
import Img from "../../nano/Img"
import Layout from "../../layout"
import consultas from "../../../consultas"

interface NFTSProps {}

const NFTS: React.FunctionComponent<NFTSProps> = () => {
  const Text = ({titulo, texto, img}) => {
    return (
      <section className="container-info-nfts">
        <div className="text">
          <h2>{titulo}</h2>
          <div dangerouslySetInnerHTML={{ __html: texto }}></div>
        </div>
        <Img src={img}></Img>
      </section>
    )
  }
  return (
    <>
      <Layout headerNofixed={true}>
        <div className="nft">
          <Img type="bg" src={consultas().nftBg} id="nftBg">
            

            <div className="contaienerRarible">
              <button type="button">
                <A type="a" to="https://rarible.com/Desincryp">
                  Adquirir colección en Rarible
                </A>
              </button>
            </div>
          </Img>
        </div>
      </Layout>
    </>
  )
}

export default NFTS
