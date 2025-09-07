import { createBrowserRouter, } from "react-router-dom";

import LoginUsuario from './pages/login_usuario';
import Cadastro from "./pages/cadastro";
import Home from './pages/home'
import Elenco from './pages/elenco'
import Jogos from './pages/jogos'
import Create from "./pages/home/create";
import Edit from "./pages/home/edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginUsuario/>
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

    {
        path: "/create",
        element: <Create/>
    },

    {
        path: "/edit",
        element: <Edit/>
    },
])

export default router