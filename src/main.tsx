import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './scss/main.scss'
import IslamicBank from './components/Home/IslamicBank'
import Tnsa from './components/TNSA/Tnsa'

const config = {
  defaultOptions: {
    queries: {
      cacheTime: 5 * 10 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 10 * 1000,
    }
  }
}

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <IslamicBank />
      <ReactQueryDevtools/>
    </StrictMode>
  </QueryClientProvider>
)