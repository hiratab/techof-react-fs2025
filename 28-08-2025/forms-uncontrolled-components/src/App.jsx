import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import OrderHamburguerPage from './components/OrderHamburguerPage'
import OrderHamburguerPage1 from './components/OrderHamburguerPage1'
import OrderSentPage from './components/OrderSentPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/order-hamburguer' element={<OrderHamburguerPage />} />
        <Route path='/order-hamburguer1' element={<OrderHamburguerPage1 />} />
        <Route path='/order-sent' element={<OrderSentPage />} />
      </Routes>
    </Router>
  )
}

export default App
