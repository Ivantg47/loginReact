import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UsuarioContext } from "../context/UsuarioContext"

export const RegistroUsuario = ({ user }) => {
    
    const { controladorUsuarioSeleccionadoForm, controladorEliminarUsuario } = useContext(UsuarioContext)
    const { id, usuario, correo } = user

    return (
        <tr>
            <td>{id}</td>
            <td>{usuario}</td>
            <td>{correo}</td>
            <td>
                <button className="btn btn-secondary btn-sm"
                    onClick={ () => controladorUsuarioSeleccionadoForm({
                        id,
                        usuario,
                        correo
                    }) }>
                    actualizar
                </button>
            </td>
            <td>
             <NavLink className={'btn btn-secondary btn-sm'} to={'/usuarios/editar/' + id}>
                actualizar 2
             </NavLink>
            </td>
            <td>
                <button className="btn btn-danger btn-sm"
                    onClick={ () => controladorEliminarUsuario(id) }>
                    eliminar
                </button>
            </td>
        </tr>
    )
}