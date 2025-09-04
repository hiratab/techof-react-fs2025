import { useContext } from "react"

import UserContext from "../context/UserContext"

function AgeInput() {
  const { user, setUser } = useContext(UserContext)

  const handleChange = (event) => {
    return setUser({
      ...user,
      age: event.target.value
    })
  }

  return (
    <div>
      <label htmlFor='age'>
        Age: 
      </label>
      <input 
        type='number'
        id='age'
        onChange={handleChange}
      />
    </div>
  )
}

export default AgeInput
