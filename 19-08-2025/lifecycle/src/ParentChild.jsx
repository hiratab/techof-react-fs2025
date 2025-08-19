import { useState, useMemo, memo } from 'react'

const Child = memo((props) => {
  console.log('Rendering Child')

  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
})

function ParentChild() {
  const [count, setCount] = useState(0)

  const user = useMemo(() => {
    return {
      name: 'Bruno',
      age: count
    }
  }, [count])

  return (
    <div>
      <h2>Parent</h2>
      <Child {...user} />
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount(previousValue => previousValue + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default ParentChild
