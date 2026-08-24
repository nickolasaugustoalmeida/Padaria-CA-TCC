import { Route, Routes } from "react-router-dom";

import CadastroPage from "../pages/Cadastro/CadastroPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/Login/LoginPage";
import BebidasPage from "../pages/Produtos/BebidasPage";
import CompotasPage from "../pages/Produtos/CompotasPage";
import TelaInicialPage from "../pages/TelaInicial/TelaInicialPage";

function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Menu" element={<TelaInicialPage/>} />
            <Route path="/Bebidas" element={<BebidasPage/>} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/Cadastro" element={<CadastroPage/>} />
            <Route path="/Compotas" element={<CompotasPage/>} />
        </Routes>
    )
}

export default AppRoutes;
