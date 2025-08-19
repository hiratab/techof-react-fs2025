import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Timer from './Timer.jsx'
import WindowResizeTracker from './WindowResizeTracker.jsx'
import ParentChild from './ParentChild.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Timer />
    <WindowResizeTracker />
    <ParentChild />
  </StrictMode>,
)
