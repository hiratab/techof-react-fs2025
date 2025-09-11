import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Users {
  users: User[]
}

function User(props: User) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Users(props: Users) {
  return (
    <>
      {props.users.map(user => <User key={user.id} {...user} />)}
    </>
  )
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(true)

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error('Failed to fetch all users')
      }

      const data: User[] = await response.json()
      setUsers(data)
    } catch (error) {
      setHasError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  
  if (isLoading) {
    return <p>Loading</p>
  }

  if (hasError) {
    return <p>Error</p>
  }

  return (
    <div>
      <Users users={users} />
    </div>
  )
}

export default App
