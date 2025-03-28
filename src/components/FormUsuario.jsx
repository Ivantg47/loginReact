import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { UsuarioContext } from "../context/UsuarioContext"

export const FormUsuario = ({ usuarioSeleccionado, controladorCerrarForm }) => {

    const { initFormUsuario, controladorAgregarUsuario } = useContext(UsuarioContext)
    const [formUsuario, setFormUsuario] = useState(initFormUsuario)
    const { id, usuario, pass, correo } = formUsuario
    
    useEffect(() => {
        setFormUsuario({
            ...usuarioSeleccionado,
            pass: ''
        })
    }, [usuarioSeleccionado])

    const onIputChange = ({ target: { name, value } }) => {
        setFormUsuario({
            ...formUsuario,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!usuario || (!pass && id === 0) || !correo) {
            Swal.fire(
                'Error de validacion',
                'Debe llenar todos los campos del formulario',
                "error"
            );

            return
        }
        console.log('-----');
        console.log(formUsuario);    
        controladorAgregarUsuario(formUsuario)
        setFormUsuario(initFormUsuario)
    }

    const onCerrarForm = () => {
        controladorCerrarForm()
        setFormUsuario(initFormUsuario)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                className="form-control my-3 w-75"
                placeholder="usuario"
                name="usuario"
                type="text"
                value={usuario}
                onChange={onIputChange}
            />
            {id > 0 || <input
                className="form-control my-3 w-75"
                placeholder="contraseña"
                name="pass"
                type="password"
                value={pass}
                onChange={onIputChange}
            />}
            <input
                className="form-control my-3 w-75"
                placeholder="correo"
                name="correo"
                type="text"
                value={correo}
                onChange={onIputChange}
            />
            <input
                name="id"
                type="hidden"
                value={id}
            />
            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
            </button>

            {!controladorCerrarForm || <button
                type="button"
                className="btn btn-secondary mx-2"
                onClick={onCerrarForm}>
                Cerrar
            </button>}
        </form>
    )
}