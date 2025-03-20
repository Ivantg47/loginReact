import { Navigate, Route, Routes } from "react-router-dom"
import { PaginaUsuarios } from "../pages/PaginaUsuario"
import { Navbar } from "../components/Navbar"
import { PaginaRegistro } from "../pages/PaginaRegistro"
import { UsuarioProvider } from "../context/UsuarioProvider"

export const UsuarioRoutes = ({ acceso, controladorCerrar }) => {

    return (<>
        <UsuarioProvider>
            <Navbar />
            <Routes>
                <Route path="usuarios/registro" element={<PaginaRegistro /> }/>
                <Route path="usuarios/editar/:id" element={<PaginaRegistro /> }/>
                <Route path="usuarios" element={ <PaginaUsuarios /> }/>
                <Route path="/" element={ <Navigate to="/usuarios" />} />
            </Routes>
        </UsuarioProvider>
    </>)
}