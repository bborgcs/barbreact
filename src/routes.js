import { createBrowserRouter, } from "react-router-dom";

import LoginAdm from './pages/login_adm';
import LoginUsuario from './pages/login_usuario';
import Cadastro from "./pages/cadastro";
import Home from './pages/home'
import Elenco from './pages/elenco'
import Jogos from './pages/jogos'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginUsuario/>
    },

    {
        path: "/login_adm",
        element: <LoginAdm/>
    },

    {
        path: "/cadastro",
        element: <Cadastro/>
    },

    {
        path: "/home",
        element: <Home/>
    },

    {
        path: "/elenco",
        element: <Elenco/>
    },

    {
        path: "/jogos",
        element: <Jogos/>
    },
])

export default router