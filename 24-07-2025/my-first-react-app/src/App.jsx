function App() {
  const user = {
    firstName: 'Bruno',
    lastName: 'Hirata'
  }

  return (
    <div>
      Hello, {getFullName(user)}
    </div>
  )
}

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`
}

export default App
