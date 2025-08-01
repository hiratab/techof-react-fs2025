import { useState } from 'react'
import TicketDetails from './TicketDetails'
const john = {
  id: 1,
  name: "John Doe",
  age: 30,
  email: "john.doe@domain.com"
}

const marie = {
  id: 2,
  name: "Marie Doe",
  age: 40,
  email: "marie.doe@domain.com",
}

const jose = {
  id: 3,
  name: "Jose Doe",
  age: 20,
  email: "jose.doe@domain.com",
}

const jose1 = {
  id: 4,
  name: "Jose1 Doe",
  age: 21,
  email: "jose1.doe@domain.com",
}

function App() {
  const [tickets, setTickets] = useState([john])

  const addTicket = () => {
    setTickets([{
      ...marie,
      id: tickets.length + 1
    }, ...tickets])
  }

  return (
    <div>
      <button onClick={addTicket}>Add</button>
      {tickets.map(ticket => <TicketDetails {...ticket} key={ticket.id}/>)}
    </div>
  )
}

export default App
