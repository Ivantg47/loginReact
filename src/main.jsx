import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilo.css'
import { UsuariosApp } from './UsuariosApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuariosApp />
  </StrictMode>,
)
