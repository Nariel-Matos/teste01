import { Route, Router, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Login from "./pages/Login";
import Home from "./pages/home/home";
import Space from './componentes/space'
import Detalhes from './pages/detalhesProduto/Detalhes'
import Loja from "./pages/loja/loja";



export default function RouterApp() {
    return (




        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={< Home />} />
            <Route path="/detalhes" element={< Detalhes />} />
            <Route path="/loja" element={< Loja />} />


        </Routes>


    )
}