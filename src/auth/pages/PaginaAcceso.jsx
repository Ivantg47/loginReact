import { useState } from "react"
import Swal from "sweetalert2"

const initForm = {
    usuario: '',
    pass: ''
}

export const PaginaAcceso = ({controladorAcceso}) => {

    const [formAcceso, setFormAcceso] = useState(initForm)
    const { usuario, pass } = formAcceso

    const onInputChange = ({ target: { name, value } }) => {
        setFormAcceso({
            ...formAcceso,
            [ name ]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!usuario || !pass) {
            Swal.fire('Error de validacion', 'Usuario y contraseña requeridos', 'error')
            return
        }
        
        controladorAcceso(formAcceso)
        
        setFormAcceso(initForm)
    }

    return (
        <>
            <div className="modal" style={ {display: 'block'} } tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Pagina Inicio de Sesion</h5>                            
                        </div>
                        <form onSubmit={ onSubmit }>
                            <div className="modal-body">
                                <input 
                                    className="form-control my-3 w-75" 
                                    type="text" 
                                    placeholder="usuario"
                                    name="usuario"
                                    value={ usuario }
                                    onChange={ onInputChange }
                                />
                                <input 
                                    className="form-control my-3 w-75" 
                                    type="password" 
                                    placeholder="contraseña"
                                    name="pass"
                                    value={ pass }
                                    onChange={ onInputChange }
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Acceder</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}