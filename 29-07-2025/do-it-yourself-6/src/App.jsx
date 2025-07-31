import { useState } from 'react'

function App() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@domain.com',
    age: 14
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {user.age > 18 
        ? <p>Age: {user.age}</p>
        : <p>Sorry, you are too young to view this information</p>
      }
    </div>
  )
}

export default App
