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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch all users')
        }

        return res.json()
      })
      .then((data: User[]) => {
        setLoading(false)
        setUsers(data)
      })
      .catch(error => {
        setLoading(false)
        setHasError(error)
      })
  }, [])

  if (hasError) {
    return <p>Error</p>
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      <Users users={users} />
    </div>
  )
}

export default App
