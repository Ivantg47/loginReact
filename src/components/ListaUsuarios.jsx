import { useContext } from "react"
import { RegistroUsuario } from "./RegistroUsuario"
import { UsuarioContext } from "../context/UsuarioContext"

export const ListaUsuarios = () => {
    
    const { usuarios } = useContext(UsuarioContext)
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