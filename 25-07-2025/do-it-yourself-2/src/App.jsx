import TicketDetails from './TicketDetails'

function App() {
  return (
    <>
      <TicketDetails 
        name="John Doe"
        destination="New York"
        gender="Mr"
        seat="14A"
      />
      <TicketDetails 
        name="Alex Doe"
        destination="Tel Aviv"
        gender="Mr"
        seat="17A"
      />
    </>
  )
}

export default App
