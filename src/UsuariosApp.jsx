import { PaginaAcceso } from "./auth/pages/PaginaAcceso"
import { useAcceso } from "./auth/hooks/useAcceso"
import { Navigate, Route, Routes } from "react-router-dom"
import { UsuarioRoutes } from "./routes/UsuarioRoutes"



export const UsuariosApp = () => {

    const { acceso, controladorCerrar, controladorAcceso } = useAcceso()

    return (
        <Routes>
            {acceso.isAuth 
                ? (
                    <Route path="/*" element={<UsuarioRoutes acceso={acceso} controladorCerrar={controladorCerrar} />} />)
                : <>
                    <Route path="/acceder" element={<PaginaAcceso controladorAcceso={controladorAcceso} />} />
                    <Route path="/*" element={<Navigate to='/acceder' />} />
                </>
            }
        </Routes>
    )
}