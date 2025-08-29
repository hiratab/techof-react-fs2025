import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import SignUpPage from './components/SignUpPage'
import UserPage from './components/UserPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage />}/>
        <Route path='/user' element={<UserPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
