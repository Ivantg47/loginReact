import { Navigate, Route, Routes } from "react-router-dom"
import { PaginaUsuarios } from "../pages/PaginaUsuario"
import { Navbar } from "../components/Navbar"
import { PaginaRegistro } from "../pages/PaginaRegistro"
import { useUsuarios } from "../hooks/useUsuarios"

export const UsuarioRoutes = ({ acceso, controladorCerrar }) => {

    const {

        usuarios,
        usuarioSeleccionado,
        initFormUsuario,
        formVisible,
        controladorAgregarUsuario,
        controladorEliminarUsuario,
        controladorUsuarioSeleccionadoForm,
        controladorAbrirForm,
        controladorCerrarForm

    } = useUsuarios()

    return (<>
        <Navbar user={ acceso.user } controladorCerrar={controladorCerrar }/>
        <Routes>
            <Route path="usuarios/registro" element={<PaginaRegistro 
                initFormUsuario={ initFormUsuario } 
                controladorAgregarUsuario={ controladorAgregarUsuario } />
            }/>
            <Route path="usuarios/editar/:id" element={<PaginaRegistro
                usuarios={ usuarios } 
                initFormUsuario={ initFormUsuario } 
                controladorAgregarUsuario={ controladorAgregarUsuario } />
            }/>
            <Route path="usuarios" element={ <PaginaUsuarios 
                usuarios={ usuarios }
                usuarioSeleccionado={ usuarioSeleccionado }
                initFormUsuario={ initFormUsuario }
                formVisible={ formVisible }
                controladorAgregarUsuario={ controladorAgregarUsuario }
                controladorEliminarUsuario={ controladorEliminarUsuario }
                controladorUsuarioSeleccionadoForm={ controladorUsuarioSeleccionadoForm }
                controladorAbrirForm={ controladorAbrirForm }
                controladorCerrarForm={ controladorCerrarForm } /> 
            }/>
            <Route path="/" element={ <Navigate to="/usuarios" />} />
        </Routes>
    </>)
}