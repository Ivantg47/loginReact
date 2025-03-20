import { useUsuarios } from "../hooks/useUsuarios"
import { UsuarioContext } from "./UsuarioContext"

export const UsuarioProvider = ({children}) => {
    
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

    return (
        <UsuarioContext.Provider value={
            {
                usuarios,
                usuarioSeleccionado,
                initFormUsuario,
                formVisible,
                controladorAgregarUsuario,
                controladorEliminarUsuario,
                controladorUsuarioSeleccionadoForm,
                controladorAbrirForm,
                controladorCerrarForm
            }
        }>
            {children}
        </UsuarioContext.Provider>
    )
}