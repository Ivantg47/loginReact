import { FormUsuario } from "./FormUsuario"

export const ModalFormUsuario = ({ initFormUsuario, controladorAgregarUsuario, usuarioSeleccionado, controladorCerrarForm }) => {
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
                                initFormUsuario={initFormUsuario}
                                controladorAgregarUsuario={controladorAgregarUsuario}
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