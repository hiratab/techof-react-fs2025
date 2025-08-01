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
  const john = {
    name: 'John Doe',
    age: 35
  }
  const jane = {
    name: 'Jane Smith',
    age: 40
  }

  const persons = [john, jane]

  return <List persons={persons} />
}

export default App
