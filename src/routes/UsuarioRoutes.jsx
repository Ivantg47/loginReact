import { Navigate, Route, Routes } from "react-router-dom"
import { PaginaUsuarios } from "../pages/PaginaUsuario"
import { Navbar } from "../components/Navbar"

export const UsuarioRoutes = ({ acceso, controladorCerrar }) => {

    return (<>
        <Navbar user={ acceso.user } controladorCerrar={controladorCerrar }/>
        <Routes>
            <Route path="usuarios" element={ <PaginaUsuarios /> } />
            <Route path="/" element={ <Navigate to="/usuarios" />} />
        </Routes>
    </>)
}