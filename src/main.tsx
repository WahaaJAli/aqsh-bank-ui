import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './scss/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <a />
  </StrictMode>,
)