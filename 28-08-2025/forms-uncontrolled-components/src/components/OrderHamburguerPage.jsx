import { useRef } from 'react'

import Navbar from './Navbar'

function OrderHamburguerPage() {
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const chipsInputRef = useRef()
  const specialRequestsInputRef = useRef()
  const termAndConditionsInputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const name = nameInputRef.current.value
    const email = emailInputRef.current.value
    const chips = chipsInputRef.current.value
    const specialRequests = specialRequestsInputRef.current.value
    const termAndConditions = termAndConditionsInputRef.current.checked

    console.log(`name ${name} email ${email} chips ${chips} 
      specialRequests ${specialRequests}
      termsAndCoditions ${termAndConditions}`)
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label>* Name: </label>
          <input
            type='text'
            ref={nameInputRef}
            required
          />
        </div>

        <div>
          <label>* Email: </label>
          <input
            type='email'
            ref={emailInputRef}
            required
          />
        </div>

        <div>
          <label>* </label>
          <select ref={chipsInputRef} required>
            <option value=''>--Do you want to order chips? --</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>

        <div>
          <label>Special requests?</label>
          <input
            type='text'
            size='40'
            ref={specialRequestsInputRef}
          />
        </div>

        <div>
          <input
            type='checkbox'
            ref={termAndConditionsInputRef}
            required
          />
          <label>* I have read and agreed to the terms and conditions</label>
        </div>

        <button type='submit'>
          Make an Order!
        </button>
      </form>
    </div>
  )
}

export default OrderHamburguerPage