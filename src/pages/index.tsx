import React from "react"
import Layout from "../components/layout"

import consultas from "../consultas"
import Img from "../components/nano/Img"
import A from "../components/nano/A"

interface IndexProps {}

const Index: React.FunctionComponent<IndexProps> = () => {
  const text = (titulo, texto, img) => {
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
          <Img type="bg" src={consultas().nftBg}>
            {text(
              "¿Qué es un NFT?",
              `       
          <p>
            Las siglas de NFT significan Non -Fungible Token, es decir: un token
            no fungible. Los tokens no Fungibles, son unidades de valor que se
            le asignan a un modelo de negocio, como por ejemplo el de las
            criptomonedas. Y es que los NFT tienen una relación estrecha con las
            criptomonedas, por lo menos tecnológicamente, aunque son opuestos,
            ya que un Bitcoin es un bien fungible, y un NFT es un bien no
            fungible, pero en esencia, son como las dos caras de una moneda
            tecnológica.
          </p>

          <p>
            Para que lo entendamos bien, podemos pensar en las criptomonedas
            como una reserva de valor, algo parecido al oro. Puedes comprar y
            vender oro, y cuando el número de compradores aumenta el precio
            sube, para bajar cuando este número de compradores disminuye. Es un
            comportamiento igual al de las criptomonedas.
          </p>
          <p>
            Pero el oro al final es oro, y puedes cambiar una pepita por otra
            sin problema. Sin embargo, hay otros bienes hechos en oro que tienen
            también un valor, pero son únicos, y ese hecho marca la diferencia y
            les da otro tipo de valor. Al igual que ese valor hecho con oro o
            una obra de arte, los NFT son activos únicos que no se pueden
            modificar ni intercambiar por otro que tenga el mismo valor, ya que
            no hay dos NFT que sean equivalentes, igual que no hay dos cuadros
            que lo sean.
          </p>`,
              consultas().nftSel
            )}

            {text(
              "Colección de NFT´S de Desincryp.",
              `       
          <p>
          La primera colección de NFT´S perteneciente a Desincryp, serán para beneficiar 
          a la comunidad que los adquiera, bien sea, obteniendo utilidad dentro del video juego
          , o revendiendo una imagen NFT, adquirida dentro de una de las plataformas donde 
          mintearemos nuestras imágenes, dichas plataformas serán: Rarible y Kron Smart Chain.
          </p>

          <p>
          Cabe resaltar que: Desincryp, son los creadores del video juego Vuelta Rápida,
           es nuestro Primer video juego Tokenizado, todo nuestro proyecto, inicia
            desde la venta de NFT´S.
          </p>
         `,
              consultas().nftArt
            )}


          <div className="contaienerRarible">
            <button type="button">
              <A type="a" to="https://rarible.com/Desincryp">Adquirir colección en Rarible</A>
            </button>
          </div>
          </Img>
        </div>
      </Layout>
    </>
  )

  /*  const info =[
    {
      itulo:"", texto:"", img:""
    },
  ] */
}

export default Index
