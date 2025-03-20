import { createContext } from "react";
import { useAcceso } from "../hooks/useAcceso";

export const AuthContext = createContext()

export const AuthProvider  = ({children}) => {

    const { acceso, controladorCerrar, controladorAcceso } = useAcceso()

    return (
        <AuthContext.Provider value={
            {
                acceso, 
                controladorCerrar, 
                controladorAcceso
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}