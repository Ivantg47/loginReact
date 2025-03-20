import { useContext } from "react"
import { ListaUsuarios } from "../components/ListaUsuarios"
import { ModalFormUsuario } from "../components/ModalFormUsuario"
import { UsuarioContext } from "../context/UsuarioContext"

export const PaginaUsuarios = () => {

    const {
        usuarios,
        formVisible,
        controladorAbrirForm
    } = useContext(UsuarioContext)

    return (
        <>
            {!formVisible || <ModalFormUsuario />}

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
                            : <ListaUsuarios />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}