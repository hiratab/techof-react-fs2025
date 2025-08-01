import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (message === 'Loading...') {
        setMessage(p => 'Ready...')
      } else {
        setMessage(p => 'Loading...')
      }
    }, 3000)

    return () => clearInterval(intervalId)
  }, [count])

  return (
    <>
      <h2>{message}</h2>
      <button onClick={() => {
        setCount(c => c + 1)
        setMessage('Loading...')
      }}>Search</button>
    </>
  )
}

export default App
