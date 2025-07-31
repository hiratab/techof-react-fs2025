import { useState } from "react";

const Mouse = () => {
  const [mouseOn, setMouseOn] = useState(false)

  const MOUSE_LEAVE_MESSAGE = 'Leave'
  const MOUSE_ENTER_MESSAGE = 'Enter'
  const [message, setMessage] = useState('')

  return (
    <div>
      <p
        onMouseEnter={() => {
          setMessage(MOUSE_ENTER_MESSAGE)
          setMouseOn(true)
        }}
        onMouseLeave={() => {
          setMessage(MOUSE_LEAVE_MESSAGE)
          setMouseOn(false)
        }}
      >
        mouse {message} {String(mouseOn)}
      </p>
    </div>
  )
}

export default Mouse;
