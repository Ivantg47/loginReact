import { useReducer, useState } from "react"
import { usuarioReducer } from "../reducers/usuarioReducer"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { actualizarUsuario, agregarUsuario, eliminarUsuario, listarUsuarios } from "../services/usuarioService"

const inicioUsuario = []

const initFormUsuario = {
    id: 0,
    usuario: '',
    pass: '',
    correo: ''
}

export const useUsuarios = () => {

    const [usuarios, dispatch] = useReducer(usuarioReducer, inicioUsuario)
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(initFormUsuario)
    const [formVisible, setFormVisible] = useState(false)
    const navigate = useNavigate()

    const getUsuarios = async () => {
        try {
            const response = await listarUsuarios()
            
            dispatch({
                type: 'cargaUsuarios',
                payload: response.data
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    const controladorAgregarUsuario = async (usuario) => {

        let response = null
        
        if (usuario.id === 0) {
            response = await agregarUsuario(usuario)
        } else {
            response = await actualizarUsuario(usuario)
        }

        dispatch({
            type: (usuario.id === 0) ? 'agregar' : 'actualizar',
            payload: response.data
        })

        Swal.fire(
            (usuario.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
            (usuario.id === 0) ? 'El usuario se creo con exito' : 'El usuario se modifico exitosamente',
            "success"
        );

        controladorCerrarForm()
        navigate('/usuarios')
    }

    const controladorEliminarUsuario = (id) => {

        Swal.fire({
            title: "Esta seguro que desea eliminar?",
            text: "Los usuarios eliminados no podran ser recuperados!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarUsuario(id)
                dispatch({
                    type: 'eliminar',
                    payload: id
                })
                Swal.fire({
                    title: "Usuario Eliminado",
                    text: "El usuario fue eliminado con exito.",
                    icon: "success"
                });
            }
        });

    }

    const controladorUsuarioSeleccionadoForm = (usuario) => {

        setUsuarioSeleccionado({ ...usuario })
        setFormVisible(true)

    }

    const controladorAbrirForm = () => {
        setFormVisible(true)
    }

    const controladorCerrarForm = () => {
        setFormVisible(false)
        setUsuarioSeleccionado(initFormUsuario)
    }

    return {
        usuarios,
        usuarioSeleccionado,
        initFormUsuario,
        formVisible,
        controladorAgregarUsuario,
        controladorEliminarUsuario,
        controladorUsuarioSeleccionadoForm,
        controladorAbrirForm,
        controladorCerrarForm,
        getUsuarios
    }
}