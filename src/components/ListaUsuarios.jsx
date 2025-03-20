import { RegistroUsuario } from "./RegistroUsuario"

export const ListaUsuarios = ( { controladorUsuarioSeleccionadoForm, controladorEliminarUsuario, usuarios }) => {
    
    return (
        <>
            <p>Lista de Usuarios</p>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Actualizar</th>
                        <th>Actualizar 2</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {                        
                        usuarios.map(user => (
                            <RegistroUsuario 
                                controladorUsuarioSeleccionadoForm={ controladorUsuarioSeleccionadoForm }
                                controladorEliminarUsuario={ controladorEliminarUsuario } 
                                key={user.id} 
                                user={ user } 
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}