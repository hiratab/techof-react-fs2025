import { useState, useEffect } from "react"

const PersonDetails = (props) => {
  return <li>{props.name} - {props.age}</li>
}

const List = (props) => {
  return (
    <ul>
      {props.persons.map(person => <PersonDetails {...person} />)}
    </ul>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [xCount, setXCount] = useState(0)

  useEffect(() => console.log("useEffect without the dependencies array"));
  useEffect(() => console.log("useEffect with empty dependencies array"), []);
  useEffect(
    () => console.log("useEffect with count in the dependencies array"),
    [count]
  );
  useEffect(
    () => console.log("useEffect with count and xCount in the dependencies array"),
    [count, xCount]
  );

  const add = () => {
    setCount(previousValue => previousValue + 1)
  }

  const addX = () => {
    setXCount(previousValue => previousValue + 1)
  }

  const john = {
    name: 'John Doe',
    age: 35
  }
  const jane = {
    name: 'Jane Smith',
    age: 40
  }
  const persons = [john, jane]

  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={addX}>+ X</button>
      <p>Count: {count}</p>
      <List persons={persons} />
    </div>
  )
}

export default App
