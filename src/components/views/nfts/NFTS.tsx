import React from "react"
import A from "../../nano/A"
import Img from "../../nano/Img"
import Layout from "../../layout"
import consultas from "../../../consultas"
import Qnft from "../../../consultas/Qnft"
import { v4 as uuidv4 } from 'uuid';


interface NFTSProps {}

const NFTS: React.FunctionComponent<NFTSProps> = () => {
  const Text = ({ texto, img }) => {
    return (
      <section className="container-info-nfts">
        <div className="text" dangerouslySetInnerHTML={{ __html: texto }}></div>
        <Img src={img}></Img>
      </section>
    )
  }
  return (
    <>
      <Layout headerNofixed={true}>
        <div className="nft">
          <Img type="bg" src={consultas().nftBg} id="nftBg">
            {Qnft().map(info => {
              return (
                <Text key={uuidv4()} texto={info.info} img={info.img} />
              )
            })}
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
