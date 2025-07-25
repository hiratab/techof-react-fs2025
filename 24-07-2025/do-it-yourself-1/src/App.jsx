import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>{classifyNumber(60)}</div>
  )
}

function classifyNumber(number) {
  if (number > 100) {
    return 'Over 100'
  }

  if (number > 50) {
    return '50-100'
  }

  return 'Under 50'
}

export default App
