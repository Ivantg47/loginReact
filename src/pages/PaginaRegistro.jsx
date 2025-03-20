import { useEffect, useState } from "react"
import { FormUsuario } from "../components/FormUsuario"
import { useParams } from "react-router-dom"

export const PaginaRegistro = ({ usuarios=[], initFormUsuario, controladorAgregarUsuario }) => {

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(initFormUsuario)
    const { id } = useParams()
    
    useEffect(() => {
        if (id) {
            const user = usuarios.find(u => u.id == id) || initFormUsuario
            setUsuarioSeleccionado(user)
        }
    }, [id])

    return (
        <div className="container my-4">
            <h4>{usuarioSeleccionado.id > 0 ? 'Editar' : 'Registrar'} Usuario</h4>
            <div className="row">
                <div className="col">
                    <FormUsuario 
                        initFormUsuario={ initFormUsuario } 
                        controladorAgregarUsuario={ controladorAgregarUsuario }
                        usuarioSeleccionado={ usuarioSeleccionado }/>
                </div>
            </div>
        </div>
    )
}