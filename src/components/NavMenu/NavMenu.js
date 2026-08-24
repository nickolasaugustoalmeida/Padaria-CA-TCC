import PersonIcon from "../../assets/images/do-utilizador.png"
import Carrinho from "../../assets/images/carrinho-de-compras.png"
import Logo from "./LogoPadaria.png"
import {Link} from 'react-router-dom'
import config from "../../assets/images/setting.png"
import perfil from "../../assets/images/profile.png"
import help from "../../assets/images/help.png"
import logout from "../../assets/images/logout.png"
import StyledMenu from "./NavMenuStyled"

import React, {useState} from 'react';




function NavMenu (){
    
    const [open, setOpen] = useState(false);

    return(
        <StyledMenu>
        <header> 
            
            
            <ul>
            <img className="Logo" src={Logo} alt="Logo de navegação" />
           
    
     
                       
                        
                <div id="Categorias"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Lanches</Link></li>
                <li><Link to="/">Confeitaria</Link></li>
                <li><Link to="/Bebidas">Bebidas</Link></li>
                </div>
            </ul>



            <div className="ItensLogin">  <img className="Carrinho" src={Carrinho} alt="Carrinho de compras"/><img className="PersonIcon" onClick={()=>{setOpen(!open)}} src={PersonIcon} alt="Abrir menu do usuário"/> </div>
           <div className={`Envelopador-menu ${open? 'active' : 'inactive'}`} id="subMenu">
                <div className="menu"> 
                    <div className="user"> 
                    <img id="Imagem-perfil" src={PersonIcon} alt="Foto do usuário"/>
                    <h2> Nickolas</h2>
                        </div>
                        <hr /> 
                        <Link className="menu-link" to="/">
                        <img src={perfil} alt=""/>
                        <p>edit profile</p>
                        <span> > </span>
                            </Link>

                            <Link className="menu-link" to="/">
                        <img src={config} alt=""/>
                        <p>Configurações</p>
                        <span> > </span>
                            </Link>

                            <Link className="menu-link" to="/">
                        <img src={help} alt=""/>
                        <p>Ajuda</p>
                        <span> > </span>
                            </Link>

                            <Link className="menu-link" to="/">
                        <img src={logout} alt=""/>
                        <p>Logout</p>
                        <span> > </span>
                            </Link>
                </div>
            </div>
        
     
        </header>
        </StyledMenu>
       
       
    )
    
}
export default NavMenu;

