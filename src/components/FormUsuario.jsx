import { useState } from "react"

const initFormUsuario = {
    usuario: '',
    pass: '',
    correo: ''
}

export const FormUsuario = ({ controladorAgregarUsuario }) => {

    const [formUsuario, setFormUsuario] = useState(initFormUsuario)
    const { usuario, pass, correo } = formUsuario

    const onIputChange = ({ target: { name, value } }) => {
        setFormUsuario({
            ...formUsuario,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!usuario || !pass || !correo) return
        controladorAgregarUsuario(formUsuario)
        setFormUsuario(initFormUsuario)
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input 
                className="form-control my-3 w-75" 
                placeholder="usuario" 
                name="usuario" 
                type="text"
                value={ usuario }
                onChange={ onIputChange }
            />
            <input 
                className="form-control my-3 w-75" 
                placeholder="contraseña" 
                name="pass" 
                type="password"
                value={ pass }
                onChange={ onIputChange }
            />
            <input 
                className="form-control my-3 w-75" 
                placeholder="correo" 
                name="correo" 
                type="text"
                value={ correo }
                onChange={ onIputChange }
            />
            <button className="btn btn-primary" type="submit">Crear</button>
        </form>
    )
}