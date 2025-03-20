import { useContext } from "react"
import { FormUsuario } from "./FormUsuario"
import { UsuarioContext } from "../context/UsuarioContext"

export const ModalFormUsuario = () => {

    const { usuarioSeleccionado, controladorCerrarForm } = useContext(UsuarioContext)

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {usuarioSeleccionado.id > 0 ? 'Editar' : 'Crear'} Usuario
                            </h5>
                        </div>
                        <div className="modal-body">
                            <FormUsuario
                                usuarioSeleccionado={usuarioSeleccionado}
                                controladorCerrarForm={controladorCerrarForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}