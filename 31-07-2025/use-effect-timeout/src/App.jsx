import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading....')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('Ready...')
    }, 3000)

    // Cleanup function
    return () => clearTimeout(timeoutId)
  }, [count])

  return (
    <>
      <h2>{message}</h2>
      <button onClick={() => {
        setCount(c => c + 1)
        setMessage('Loading....')
      }}>Search</button>
    </>
  )
}

export default App
