const TicketDetails = (props) => {
  return (
    <>
      <h1>Ticket Details</h1>

      <p>Name: {props.name}</p>
      <p>Destination: {props.destination}</p>
      <p>Gender: {props.gender}</p>
      <p>Seat: {props.seat}</p>
    </>
  )
}

export default TicketDetails
