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

export default TicketDetails