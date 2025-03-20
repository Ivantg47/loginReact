import { NavLink } from "react-router-dom"

export const RegistroUsuario = ({ controladorUsuarioSeleccionadoForm, controladorEliminarUsuario, user }) => {
    
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