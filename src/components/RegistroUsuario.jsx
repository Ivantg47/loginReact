export const RegistroUsuario = ({ controladorEliminarUsuario, user }) => {
    
    const onEliminar = (id) => {
        controladorEliminarUsuario(id)
    }

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.usuario}</td>
            <td>{user.correo}</td>
            <td>
                <button className="btn btn-secondary btn-sm">
                    actualizar
                </button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm"
                    onClick={ () => onEliminar(user.id) }>
                    eliminar
                </button>
            </td>
        </tr>
    )
}