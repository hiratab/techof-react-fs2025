import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    console.log('increment count', count)
  }

  return (
    <>
      <p>Count is {count}</p>
      <button
        onClick={increment}
      >
        Increment
      </button>
    </>
  )
}

export default App
