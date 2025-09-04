import { useContext } from "react"

import UserContext from "../context/UserContext"

function EmailInput() {
  const { user, setUser } = useContext(UserContext)

  const handleChange = (event) => {
    return setUser({
      ...user,
      email: event.target.value
    })
  }

  return (
    <div>
      <label htmlFor='email'>
        Email: 
      </label>
      <input 
        type='email'
        id='email'
        onChange={handleChange}
      />
    </div>
  )
}

export default EmailInput