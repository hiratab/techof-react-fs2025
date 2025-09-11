import User from './components/User'
import useUsers from './hooks/useUsers'

function App() {
  const { users, hasError, isLoading } = useUsers()

  if (isLoading) {
    return <p>Loading</p>
  }

  if (hasError) {
    return <p>Error</p>
  }

  return (
    <div>
      {users.map(user => <User key={user.id} {...user} />)}
    </div>
  )
}

export default App
