import { useReducer } from "react"
import { FormUsuario } from "./components/FormUsuario"
import { ListaUsuarios } from "./components/ListaUsuarios"
import { usuarioReducer } from "./reducers/usuarioReducer"

const inicioUsuario = [
    {
        id: 1,
        usuario: 'pepe',
        pass: '123',
        correo: 'pepe@correo.com'
    }
]

export const UsuariosApp = () => {

    const [usuarios, dispatch] = useReducer(usuarioReducer, inicioUsuario)

    const controladorAgregarUsuario = (usuario) => {
        dispatch({
            type: 'agregar',
            payload: usuario
        })
    }

    const controladorEliminarUsuario = (id) => {
        dispatch({
            type: 'eliminar',
            payload: id
        })
    }

    return (<div className="container my-4">
        <h2>Usuarios App</h2>
        <div className="row">
            <div className="col">
                { usuarios.length === 0 ?
                    <div className="alert alert-warning">No hay usuarios registrados</div> 
                 : <ListaUsuarios controladorEliminarUsuario={ controladorEliminarUsuario } usuarios={ usuarios }/>
                }
            </div>
            <div className="col">
                <FormUsuario controladorAgregarUsuario={ controladorAgregarUsuario }/>
            </div>
        </div>
    </div>)
}