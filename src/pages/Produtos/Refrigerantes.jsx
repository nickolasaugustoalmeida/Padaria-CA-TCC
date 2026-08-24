import "./Refris.css"
import Coca from "../../assets/images/Coca.png"
import Carrinho from "../../assets/images/shopping-cart-svgrepo-com.svg"
import FP from "../../assets/images/Final-pag-bebidas.jpeg"
import Fanta from "../../assets/images/fanta_guarana.png"
import Guarana from "../../assets/images/Guarana.png"
function Refrigerantes(){
    return(

        <div id="wrap2">

            <div id="Refrigerantes"> 
            
            <h3>Refrigerantes:</h3> 


            
        </div>
       
            <div id="Itens"> 
            <div className="Lata"> 
                
                        <img className="Latas" src={Coca} alt="Coca-Cola Original"/>
                            
                             <h1 id="Coca_texto">Coca-Cola Original</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho} alt=""/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>
                                             <div className="Lata"> 
                
                <img className="Latas" id="Fanta" src={Fanta} alt="Fanta Guaraná"/>
                    
                     <h1 id="Fanta-Letra">Refrigerante Fanta-Guaraná</h1><div className="letras"> 
                        <h2> 310ml</h2>
                             <h2> R$10,00</h2>
                                </div>  <div id="over">   <div className="Adds">  <img src={Carrinho} alt=""/>
                                    <p>Adicione ao carrinho</p> </div>
                                 </div>
                                     </div>
                                     <div className="Lata"> 
                
                        <img className="Latas" id="Guarana" src={Guarana} alt="Refrigerante Guaraná"/>
                            
                             <h1 id="Guarana_texto">Refrigerante Guaraná</h1><div className="letras"> 
                                <h2> 310ml</h2>
                                     <h2> R$10,00</h2>
                                        </div>  <div id="over">   <div className="Adds">  <img src={Carrinho} alt=""/>
                                            <p>Adicione ao carrinho</p> </div>
                                         </div>
                                             </div>
                                             




            
         
            </div>
    
            <img className="Final-pag" src={FP} alt="Seleção de produtos da padaria"/>
            <div className="SobreNos">
            <h1>Nossos canais</h1> <h1>11 9999-9999</h1>
            

            </div>
            <p id="paragrafo">Cuidado para não cair em golpes</p>
            </div> 

    );  
}export default Refrigerantes;
