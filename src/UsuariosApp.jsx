import { PaginaAcceso } from "./auth/pages/PaginaAcceso"
import { useAcceso } from "./auth/hooks/useAcceso"
import { Navigate, Route, Routes } from "react-router-dom"
import { UsuarioRoutes } from "./routes/UsuarioRoutes"
import { useContext } from "react"
import { AuthContext } from "./auth/context/AuthContext"



export const UsuariosApp = () => {

    const { acceso } = useContext(AuthContext)

    return (
        <Routes>
            {acceso.isAuth 
                ? (
                    <Route path="/*" element={<UsuarioRoutes />} />)
                : <>
                    <Route path="/acceder" element={<PaginaAcceso />} />
                    <Route path="/*" element={<Navigate to='/acceder' />} />
                </>
            }
        </Routes>
    )
}