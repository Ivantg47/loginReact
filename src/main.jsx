import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilo.css'
import { UsuariosApp } from './UsuariosApp'
import { PaginaAcceso } from './auth/pages/PaginaAcceso'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UsuariosApp />
    </BrowserRouter>
  </StrictMode>,
)
