import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// esta dependencia nos permite utilizar un debugger como desarrollador
import { ReactQueryDevtools} from '@tanstack/react-query-devtools'

// declarar nuestro query client nos permite establecer en donde se van a guardar los datos en memroria cache
const courseQueryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* QueryClientProvider nos permite tener un contexto para toda la aplicación */}
    <QueryClientProvider client={ courseQueryClient }>
      <App />
      {/* Agregamos el debugger al proyecto */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
)
