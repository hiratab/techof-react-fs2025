import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hello from './Hello.jsx'
import './index.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
    <App />
  </StrictMode>,
)
