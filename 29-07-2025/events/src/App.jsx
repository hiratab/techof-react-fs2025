import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const add = (value) => {
    setCount(previousValue => previousValue + value)
  }

  const increment = () => {
    add(1)
  }

  const decrement = () => {
    add(-1)
  }

  return (
    <>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => add(1)}>+</button>
        <button onClick={() => add(-1)}>-</button>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
