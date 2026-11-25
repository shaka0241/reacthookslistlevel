import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Busca el elemento raíz definido en index.html y crea allí la raíz de React.
// La aserción `!` indica a TypeScript que confiamos en que ese elemento existe.
createRoot(document.getElementById('root')!).render(
  // StrictMode ayuda a detectar ciertos problemas durante el desarrollo.
  // En desarrollo puede volver a ejecutar ciclos de efectos para revelar
  // efectos secundarios que no estén preparados para repetirse limpiamente.
  <StrictMode>
    <App />
  </StrictMode>,
)
