import { useReducer, useState } from "react"
import { usuarioReducer } from "../reducers/usuarioReducer"
import Swal from "sweetalert2"

const inicioUsuario = [{
    id: 1,
    usuario: 'pepe',
    pass: '123',
    correo: 'pepe@correo.com'
}]

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

    const controladorAgregarUsuario = (usuario) => {

        dispatch({
            type: (usuario.id === 0) ? 'agregar' : 'actualizar',
            payload: usuario
        })

        Swal.fire(
            (usuario.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
            (usuario.id === 0) ? 'El usuario se creo con exito' : 'El usuario se modifico exitosamente',
            "success"
        );

        controladorCerrarForm()

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
        controladorCerrarForm
    }
}