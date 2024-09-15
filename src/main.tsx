import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './scss/main.scss'
import IslamicBank from './components/Home/IslamicBank'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IslamicBank />
  </StrictMode>
)