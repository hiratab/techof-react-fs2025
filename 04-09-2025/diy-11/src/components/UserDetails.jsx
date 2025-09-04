import { useContext } from 'react'

import NameContext from '../context/NameContext'
import UserContext from '../context/UserContext'

function UserDetails() {
  const { name } = useContext(NameContext)
  const { user } = useContext(UserContext)

  return (
    <div>
      <h2>User Details</h2>
      <p>{`Name: ${name}`}</p>
      <p>{`Email: ${user.email}`}</p>
      <p>{`Age: ${user.age}`}</p>
    </div>
  )
}

export default UserDetails