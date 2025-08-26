import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'
import PostsPage from './pages/PostsPage'
import PostDetailPage from './pages/PostDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/user' element={<UsersPage />} />
        <Route path='/user/:userId' element={<UserPage />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/post/:id' element={<PostDetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
