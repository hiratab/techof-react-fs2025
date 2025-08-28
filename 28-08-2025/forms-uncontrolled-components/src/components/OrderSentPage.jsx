import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from './Navbar'

function OrderSentPage() {
  const navigate = useNavigate()

  const location = useLocation()
  const {
    name,
    email,
    chips,
    specialRequests
  } = location.state || {}

  return (
    <div>
      <Navbar />
      <h1>Order Sent</h1>
      <p>Your order is being prepared</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Chips: {chips}</p>
      <p>Special Requests: {specialRequests}</p>
      <button onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  )
}

export default OrderSentPage