import React, { useState } from "react"
import Layout from "../components/layout"

import consultas from "../consultas"
import Img from "../components/nano/Img"
import A from "../components/nano/A"
import Icono from "../components/nano/Icono"

interface IndexProps {}

const Index: React.FunctionComponent<IndexProps> = () => {
  const info = {
    historia: {
      titulo: "Historia del video juego",
      info: `<p>La Isla Shinjuku, es una isla voladora que fue financiada por las seis (6) escuderías más adineradas del planeta tierra, desde el año 2019 inicio de la pandemia, realizaron una reunión llamada “La Asakura”, planificaron en ella financiar el proyecto “Vuelta Rápida”. Se trata de ver como los personajes más talentosos del siglo XXI de toda la farándula y medio artístico, compiten en una isla voladora, que una vez en ella solo queda dar la vuelta más rápida, alcanzar el primer lugar para obtener más recompensas y lograr que la isla se mantenga en Órbita, así se salva la humanidad y ellos conservan sus recuerdos y experiencias de cuando eran humanos.</p>
    <p>Los humanoides, son Robots, con las siluetas de personajes de la farándula, lideres deportivos, políticos, cantantes, y demás, en la reunión de Asakura, las 6 escuderías tomaron la decisión de perseguir, capturar y programar en Robots, las memorias y experiencias de las personas más talentosas del siglo XXI, crearon una Isla con propulsores, en ella crearon circuitos con pistas de carreras, puentes, hangares, bombas de gasolina y toda una ciudad en ella.</p>
    <p>Las islas Shinjuku, son unas islas voladoras, que funciona con unos motores a propulsión que la mantienen en órbita, esta se encuentra sobre la capital de la ciudad más poblada del planeta, China, si esta Isla se desploma, causaría una gran catástrofe, no solo en esa zona del planeta sino en el mundo entero.</p>
    <p>Shinjuku, se mantiene en órbita por unos paneles solares que proporcionan energía continua a los propulsores, y el combustible, debe ser sustentado por los humanoides, que tienen la tarea de proporcionar combustible a “EL Ávila” La gran montaña es un enorme contenedor de combustible, con el que los propulsores se alimentan.</p>
    <p>El 06 de Mayo del 2.058, fueron inauguradas las Islas albergando una población de solo 600 humanoides y 600 Vehículos, que competirán entre ellos hasta la próxima llegada de Humanoides a las Islas Shinjuku, la cual Arribarán 1.200 humanoides y serán colocados 1.200 vehículos más, para la tercera llegada serán 6.000 Humanoides y 10.000 vehículos, la cuarta y quinta llegada tendrán la misma cantidad de talentosos humanoides y vehículos.</p>
    <p>Para Poder mantenerse con vida en las Islas Voladoras Shinjuku, los humanoides, (Conductores) deben competir con sus vehículos en los peligrosos circuitos que rodean los 12.000 Kilometro cuadrados de las islas, al correr más rápido que los otros humanoides (usuarios) obtienen monedas y recompensas, estas se utilizan para poder mantener sus vehículos, personalizarlos y así obtener más recompensas.</p>
    <p>Mantener los vehículos al tope de sus rendimientos, es un trabajo que lleva dedicación y empeño, dar la vuelta más Rápida y reclamar las monedas de recompensas, que el mismo circuito le da a los ganadores, es un trabajo que todos quieren lograr.</p>
    <p>Los humanoides, son almas de los humanos más talentosos del siglo XXI que fueron encapsuladas en memorias y luego programados en robots, así la humanidad, jamás perdería la dicha de disfrutar del talento de estos humanos, este trabajo se lo debemos a las 6 escuderías más ambiciosas y adineradas del planeta tierra que lo planificaron en la reunión de “Asakura”.</p>
    <p>Los circuitos de las islas, cuentan con diferentes niveles, desde un nivel básico para principiantes hasta un nivel muy elevado que exige velocidad y destreza en el volante, mientras más ganen, más exigente se pone la carrera y más recompensas ganaran al dar la Vuelta Más Rápida.</p>`,
    },
    genero: {
      titulo: "Genero del video juego",
      info: `
    <p>Vuelta Rápida, es un video juego NFT, que tendrá la particularidad de generar ingresos a quienes compitan y tomen su tiempo para competir, desarrollar destrezas, conocer puntos débiles de las pistas y obtener recompensas del video juego.</p>
    <p>Debes realizar una inversión mínima viable, bien sea para alquilar un vehículo, y compartir tus ganancias con el dueño del vehículo o para adquirir tu propio vehículo, y competir en los circuitos de la Isla Shinjuku.</p>`,
    },

    gamePlay: {
      titulo: "Game Play",
      info: "<p>Al iniciar la carrera y colocar el vehículo en la marca de salida, tu vehículo, se conectará por audio con los otros 4 usuarios que competirán contra ti, accediendo desde tu micrófono y audífono a la internet, creando interacción entre los participantes, bien sea para indicar trucos o advertencia de caminos a tomar.</p>",
    },
    mecanica: {
      titulo: "Mecánica Del Juego",
      info: `<p>Al acceder a la web de nuestro juego, creas una cuenta, eliges tu Humanoide con el que será vinculado tu Wallet (cuenta), eliges la opción de tu preferencia (Alquilar Vehículo o Comprar Vehículo) el usuario que alquila un vehículo, debe tomar el arrendatario que mejor % pague a sus trabajadores, debe llenar el tanque de gasolina, revisar los neumáticos y procurar dar la Vuelta Más Rápida.</p>
      <p>Si la opción de tu preferencia fue la segunda, serás el dueño de tu vehículo, esto te permitirá tener el 100% de tus ganancias.</p>
      <p>Para ser un Arrendatario de vehículos, debes contar por lo menos con 4 vehículos en tu Wallet o Garaje, crear tu cuenta como arrendatario y ofrecer un % a quien desee jugar para ganar monedas.</p>
      <p>Si tu opción es alquilar vehículo, creas una cuenta como arrendatario, estar de acuerdo con el método de pago que utilice el arrendador, llenar un formulario para garantizar el acuerdo y a correr.</p>
      <p>Debes considerar que: los vehículos gastan 6 litros de gasolina por vuelta, y los neumáticos se desgastan cada 9 carreras, entre los premios hay; Gasolina y Neumáticos.</p>`,
    },
    diseno: {
      titulo: `Diseño`,
      info: `<p>Los Vehículos aquí mostrados, son de nuestra inspiración, solo pocos diseños son tomados de la vida real, pero en su mayoría diseñada por nuestra empresa asociada BastarII Design C.A, dirigida por un Venezolano creativo quien bajo su marca nos facilitó los diseños que ahora usted utiliza, los circuitos, e Islas Shinjuku, diseñada por Desincryp.com… todo cuenta con un diseño futurista, e innovador que se asemeja a la realidad y causa un gran impacto entre sus usuarios, proporcionando excelentes diseños para que los usuarios tengan mejor experiencia, extraordinarios paisajes y un muy detallado acabado en nuestros diseños.</p>
     `,
    },

    vehiculos: {
      titulo: `Vehículos NFT`,
      info: `<p>El Jericó 2J, de la Escudería Automotriz DESINCRYP, es un vehículo Sport, que se clasifica como un Pony Cars, con motor en la parte trasera, dos puertas, con tracción trasera haciendo del auto un Monstruo en la pista.</p>
      <p>Este Muscle Car, inspirado en el Chevrolet Camara ZL, lo hace insuperable ya que cuenta con un diseño aerodinámico que permite mayor desplace en la carretera, el diseño frontal fabricado en Fibra de Carbono, lo hace tener mejor y mayor definición en las curvas, al contar con este tipo de Spoiler, además, el atrapa aire de los costados lo hace más rápido aprovechando las fuertes ragas de aire producidas por los 295Km de velocidad causados por este verdadero Monstruo.</p>
      <p>En la parte trasera encontramos un espectacular Spoiler de fibra de carbono, que mantienen el vehículo aferrado a la pista en alta velocidad, Debajo de la puerta trasera del Jericó 2J, encontramos un motor V8, de 6.2 Lt, sobre alimentado por compresor, en esas 10 Velocidades desarrolladas por su caja de cambios, se desata un verdadero Monstruo de la pista, de seguro muchos verán sus espectaculares Luces Led Traseras.</p>
      <p>Su nombre Jericó, se debe a que en la biblia se narra la historia de un profeta que teniendo fe hizo que Dios hiciera temblar la tierra en Jericó, al burlarse de los Falsos profetas, el 2J se le otorga a Juan Manuel y Juan Luis, a quienes merecemos este hermoso ejemplar de Belleza y velocidad.</p>
      
      <p>Tabla Gráfica.</p>
      <p><table>
      <tbody>
      <tr>
      <td></td>
      <td>Velocidad Máxima</td>
      <td>Segundos 0-100</td>
      <td>Clasificación</td>
      </tr>
      <tr>
      <td>Jericó 2J</td>
      <td>295 KM</td>
      <td>3</td>
      <td>Sport</td>
      </tr>
      </tbody>
      </table></p>
      <p>Es un vehículo Sport, diseñado exclusivo para la Escudería DESINCRYP, inspirado en el Mustang GT500KR, nuestro diseño cuenta con 4 Puertas pensando en la compañía que se pueda tener para disfrutar de las pistas, es una vehículo liviano, además cuenta con barras estabilizadoras, que garantizan la estabilidad del vehículo, su mayor atractivo es su frontal agresivo fabricado en Fibra de carbono, y un diseño aerodinámico que garantiza el agarre a la carretera, un traga aire en el capo que permite que el motor se mantenga fresco, las ruedas del Sparta PR1000 son de 20 Pulgadas permitiendo mejor desplazamiento en la carretera, cada línea de nuestro diseño está ubicada para que nuestro auto se mantenga en la pista.</p>
      <p>En lo que tiene que ver con las revisiones técnicas Sparta PR1000, suspensión adaptativa calibrada bajo altos estándares de la industria automotriz, un Súper Motor V8 Sobre Alimentado de 5.2 Litros y turbo incluido con un compresor de 4 HP, un intercooler que garantiza la entrada de aire frio al motor, admisión y escape que ayudan a producir unos nada discretos: 986,39 HP de potencia.</p>
      <p>Es imposible, escuchar el ruedo del motor y no voltear a mirar el Sparta PR1000 (Príncipe de las carreteras) su nombre es debido a que, en los tiempos de la antigüedad, en toda Europa los mejores gladiadores en el coliseo eran los de Sparta, y este vehículo es un gran luchador. Las Siglas ¨PR¨ se debe a la abreviatura de: Prince of Roads (Príncipe de las carreteras).</p>
      <p>Tabla Grafica.</p>
      <p><table>
      <tbody>
      <tr>
      <td></td>
      <td>Velocidad Máxima</td>
      <td>Segundos 0-100</td>
      <td>Clasificación</td>
      </tr>
      <tr>
      <td>Sparta PR1000</td>
      <td>285 KM</td>
      <td>3,3</td>
      <td>Sport</td>
      </tr>
      </tbody>
      </table></p>
      <p>La escudería Bstarll, trabajo fuertemente en el diseño de este vehículo, El NSX+ SPORT, cuenta con un diseño aerodinámico que proporciona a su conductor: seguridad, confort y agarre en las pistas, su frontal fabricado en Fibra de carbono para hacerlo más liviano, resistente a la fuerza que es generada por esta verdadera vestía.</p>
      <p>Este vehículo fue diseñado para la velocidad, para la exigencia en las pistas, este Pony Car, inspirado en el Acura NSX de la compañía Honda, primo hermano del Jericó 2J, cuenta con unos enormes neumáticos de 18 Pulgadas, unos rines de magnesio decorativos, dos puertas laterales, tapicería de cuero, unos muy bien diseñados retrovisores que dan visibilidad para mantener distancia entre sus rivales, el NSX+ SPORT cuenta con unos Spoiler laterales para garantizar agarre en las ruedas delanteras, y en uno Spoiler muy bien ubicado en la parte trasera que mantienen el vehículo aferrado a la carretera.</p>

      <p>Debajo de la cajuela trasera, lleva un enorme motor V6 biturbo sobre alimentado de 5.5 Litros, con un compresor de 4.2, un intercooler que garantiza la entrada de aire frio al motor, para asegurar su mayor rendimiento en la pista.</p>
      <p>Su atractivo diseño lo hace ser digno de este primer arribo a la isla, y competir contra los otros autos que procuraran Dar la vuelta más rápida y hacer que los Teki (enemigos/Japonés) muerdan el polvo.</p>
      <p>Tabla Grafica.</p>
      <p><table>
      <tbody>
      <tr>
      <td width="146"></td>
      <td width="170">Velocidad Máxima</td>
      <td width="152">Segundos 0-100</td>
      <td width="120">Clasificación</td>
      </tr>
      <tr>
      <td width="146">NSX+ SPORT</td>
      <td width="170">300 KM</td>
      <td width="152">2.9</td>
      <td width="120">Sport</td>
      </tr>
      </tbody>
      </table></p>
      `,
    },
    /*    gamePlay: {
      titulo: ``,
      info: `<p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>`,
    },
    gamePlay: {
      titulo: ``,
      info: `<p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>`,
      
    },
    gamePlay: {
      titulo: ``,
      info: `<p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>`,
    } */
  }

  const [myInfo, setMyInfo] = useState(info.historia)

  return (
    <Layout headerNofixed={true}>
      <Img type="bg" src={consultas().nftBg} css="background">
        <div className="whitepaper">
          <div className="infoPaper">
            <aside>
              <nav>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.historia)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-history"></Icono>
                        Historia del video juego
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.genero)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-flash"></Icono>
                        Genero del video juego
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.gamePlay)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-game-controller"></Icono>
                        Game Play
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.mecanica)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-electric_car"></Icono>
                        Mecánica Del Juego
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.diseno)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-auto_fix_high"></Icono>
                        Diseño
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.vehiculos)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-automobile"></Icono>
                        Vehículos NFT
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.historia)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-shield"></Icono>
                        Escuderia
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.historia)
                      }}
                    >
                      <A to="#">
                        <Icono css="icon-text-document-inverted"></Icono>
                        Compañia
                      </A>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMyInfo(info.historia)
                      }}
                    >
                      <A to="#">
                        <Icono
                          css="icon-home
"
                        ></Icono>
                        Etapas del Video Juego
                      </A>
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>
            <div className="containerInfo">
              <h2>{myInfo.titulo}</h2>

              <div dangerouslySetInnerHTML={{ __html: myInfo.info }}></div>
            </div>
          </div>
        </div>
      </Img>
    </Layout>
  )
}

export default Index
