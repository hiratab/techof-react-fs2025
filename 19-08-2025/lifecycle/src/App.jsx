import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  
  useEffect(() => {
    console.log("Only run on mount")
  }, [])

  useEffect(() => {
    console.log("Updating")
  }, [count])

  useEffect(() => {
    return () => {
      console.log("Umont")
    }
  }, [count])

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((previousCount) => previousCount + 1)
        }}
      >
        +
      </button>
    </>
  )
}

export default App
