import NavMenu from "../../components/NavMenu/NavMenu";
import Comps from "../../assets/images/compotas.png"
import ListaCompotas from "./ListaCompotas"
import "./Compotas.css"
function Compotas(){
    return(

    
        
        <><NavMenu />
        
        <div id="wrap10">
        <div id="Bebidas-1">

            <div className="Bebidas-2">
            <h1 > Compotas</h1>
            <p >As compotas mais gostosas!</p>  
            
            </div>

            <img id="Comp" src={Comps} alt="legenda"/>
            
            
            
        </div>

        

        
        



       
        </div>
        <ListaCompotas/>
        
        </>
        
        
        
        


    );  
}export default Compotas;
