import { createContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState({
    email: '',
    age: 0,
  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export default UserContext
