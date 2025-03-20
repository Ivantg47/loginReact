import { NavLink } from "react-router-dom"

export const Navbar = ({ user, controladorCerrar }) => {
    
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UsuariosApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <NavLink className="nav-link" to="/usuarios">
                                Usuarios
                            </NavLink>
                        </li>
                        <li className="nav-iteam">
                            <NavLink className="nav-link" to="/usuarios/registro">
                                Registrar Usuario
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavCierre">
                    <span className="nav-item nav-link text-primary mx-3">
                        { user?.usuario }
                    </span>
                    <button 
                        className="btn btn-outline-success"
                        onClick={ controladorCerrar }>
                        Cerrar
                    </button>
                </div>
            </div>
        </nav>
    </>)
}