import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from './Navbar'

const LoginPage = () => {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')

    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    console.log(`email: ${email} password: ${password}`)

    navigate('/')
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input
            type='email'
            ref={emailInputRef}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type='password'
            ref={passwordInputRef}
          />
        </div>

        <select>
          <option value='1'>dasd</option >
        </select>

        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage