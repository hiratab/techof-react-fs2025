import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home Page</Link>
      <Link to='/about'>About Page</Link>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>This is the home page</p>
    </div>
  )
}

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <p>This is the About page</p>
    </div>
  )
}

const NotFoundPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Not Found Page</h1>
      <p>This is the Not Found page</p>
      <Link to='/'>Home Page</Link>
    </div>
  )
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
