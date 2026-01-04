import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserRoutes from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserRoutes />
  </StrictMode>,
)
