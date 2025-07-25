import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const add = (number) => {
    setCount(count + number)
  }

  return (
    <>
      <p>Count is {count}</p>
      <button
        onClick={() => add(1)}
      >
        +
      </button>
      <button
        onClick={() => add(-1)}
      >
        -
      </button>
    </>
  )
}

export default App
