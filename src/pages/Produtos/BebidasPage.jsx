import NavMenu from "../../components/NavMenu/NavMenu";
import "./Bebidas.css"
import bebidas from "../../assets/images/bebidas.png"
import Refrigerantes from "./Refrigerantes"

function Bebidas(){
    return(

    
        
        <><NavMenu />
        
        <div id="wrap10">
        <div id="Bebidas-1">

            <div className="Bebidas-2">
            <h1 > Bebidas</h1>
            <p >Refrescando ou aquecendo o seu dia</p>  
            
            </div>

            <img id="Latas1" src={bebidas} alt="legenda"/>
            
            
            
        </div>

        

        
        



       
        </div>
        <Refrigerantes/>
        
        </>
        
        
        
        


    );  
}export default Bebidas;
