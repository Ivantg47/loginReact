import { useReducer } from "react"
import Swal from "sweetalert2"
import { accesoReducer } from "../reducers/accesoReducer"
import { iniciado } from "../services/accesoServices"
import { useNavigate } from "react-router-dom"

const initAcceso = JSON.parse(sessionStorage.getItem('acceso')) || {
    isAuth: false,
    user: undefined
}

export const useAcceso = () => {

    const [acceso, dispatch] = useReducer(accesoReducer, initAcceso)
    const navigate = useNavigate()

    const controladorAcceso = ({ usuario, pass }) => {
        
        if (iniciado(usuario, pass)) {

            const user = { usuario: 'admin' }

            dispatch({
                type: 'acceso',
                payload: user
            })

            sessionStorage.setItem('acceso', JSON.stringify({
                isAuth: true,
                user
            }))

            navigate('/usuarios')
            
        } else {
            Swal.fire('Error de autenticacion', 'Usuario y/o contraseña invalidos', 'error')
        }
    }

    const controladorCerrar = () => {
        dispatch({
            type: 'cerrar'
        })
        sessionStorage.removeItem('acceso')
    }

    return {
        controladorAcceso,
        controladorCerrar,
        acceso
    }
}