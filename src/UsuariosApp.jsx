import { ListaUsuarios } from "./components/ListaUsuarios"
import { ModalFormUsuario } from "./components/ModalFormUsuario"
import { useUsuarios } from "./hooks/useUsuarios"

export const UsuariosApp = () => {

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
        <>
            {!formVisible || <ModalFormUsuario 
                initFormUsuario={ initFormUsuario }
                controladorAgregarUsuario={ controladorAgregarUsuario }
                usuarioSeleccionado={ usuarioSeleccionado }
                controladorCerrarForm={ controladorCerrarForm }
            />}

            <div className="container my-4">
                <h2>Usuarios App</h2>
                <div className="row">
                    <div className="col">
                        {formVisible || <button
                            className="btn btn-primary my-2"
                            onClick={controladorAbrirForm}>
                            Nuevo Usuario
                        </button>}

                        {usuarios.length === 0 ?
                            <div className="alert alert-warning">No hay usuarios registrados</div>
                            : <ListaUsuarios
                                controladorUsuarioSeleccionadoForm={controladorUsuarioSeleccionadoForm}
                                controladorEliminarUsuario={controladorEliminarUsuario}
                                usuarios={usuarios}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}