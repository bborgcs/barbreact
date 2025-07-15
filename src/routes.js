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
        path: "/",
        element: <LoginAdm/>
    },

    {
        path: "/",
        element: <Cadastro/>
    },

    {
        path: "/",
        element: <Home/>
    },

    {
        path: "/",
        element: <Elenco/>
    },

    {
        path: "/",
        element: <Jogos/>
    },
])

export default router