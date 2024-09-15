import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './scss/main.scss'
import IslamicBank from './components/IslamicBank/Home/IslamicBank'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IslamicBank />
  </StrictMode>
)