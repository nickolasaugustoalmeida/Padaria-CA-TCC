import "./Refris.css"
import ImagemCompota from "../../assets/images/Comp1.png"
import Carrinho from "../../assets/images/shopping-cart-svgrepo-com.svg"
import FP from "../../assets/images/Final-pag-bebidas.jpeg"

const compotas = ["C1", "C2", "C3", "C4", "C5", "C6"];

function ListaCompotas() {
    return(
        <div id="wrap2">
            <div id="Refrigerantes">
                <h3>Compotas:</h3>
            </div>

            <div id="Itens">
                {compotas.map((nome) => (
                    <div className="Lata" key={nome}>
                        <img className="Latas" src={ImagemCompota} alt={`Compota ${nome}`}/>
                        <h1>{nome}</h1>
                        <div className="letras">
                            <h2>310ml</h2>
                            <h2>R$10,00</h2>
                        </div>
                        <div id="over">
                            <div className="Adds">
                                <img src={Carrinho} alt=""/>
                                <p>Adicione ao carrinho</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <img className="Final-pag" src={FP} alt="Seleção de produtos da padaria"/>
            <div className="SobreNos">
                <h1>Nossos canais</h1>
                <h1>11 9999-9999</h1>
            </div>
            <p id="paragrafo">Cuidado para não cair em golpes</p>
        </div>
    );
}

export default ListaCompotas;
