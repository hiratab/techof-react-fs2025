const TicketDetails = (props) => {
  return (
    <div>
      <h2>Ticket Details</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>email: {props.email}</p>
    </div>
  )
}

function App() {
  const john = {
    name: "John Doe",
    age: 30,
    email: "john.doe@domain.com"
  }

  const marie = {
    name: "Marie Doe",
    age: 40,
    email: "marie.doe@domain.com",
  }

  const jose = {
    name: "Jose Doe",
    age: 20,
    email: "jose.doe@domain.com",
  }

  const jose1 = {
    name: "Jose1 Doe",
    age: 21,
    email: "jose1.doe@domain.com",
  }

  const tickets = [john, marie, jose, jose1]

  return (
    <div>
      {tickets.map(ticket => <TicketDetails {...ticket} />)}
    </div>
  )
}

export default App
