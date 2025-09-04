import { useState } from 'react'

function App() {
  const [phoneNumber, setPhoneNumber] = useState({
    unformatted: '',
    formatted: ''
  })

  const [creditCard, setCreditCard] = useState({
    unformatted: '',
    formatted: '',
    plainFormatted: ''
  })
  const [showCreditCardNumber, setShowCreditCardNumber] = useState(false)

  const formatPhoneNumber = (value) => {
    console.log(`formatPhoneNumber value: ${value}`)

    const unformattedPhoneNumber = value.replace(/(?:\+351)?\D*/g, '');
    const MASK = 'XXX XXX XXX'

    let formattedPhoneNumber = '+351 '
    for (let i = 0, j = 0; i < MASK.length && j < unformattedPhoneNumber.length; i++) {
      if (MASK[i] === 'X') {
        formattedPhoneNumber += unformattedPhoneNumber[j]
        j++
      } else {
        formattedPhoneNumber += MASK[i]
      }
    }

    return formattedPhoneNumber
  }

  const handleChange = (event) => {
    const formattedValue = formatPhoneNumber(event.target.value)
    setPhoneNumber({
      formatted: formatPhoneNumber(event.target.value),
      unformatted: formattedValue.replace(/(?:\+351)?\D*/g, '')
    })
  }
  console.log('credit card', creditCard)

  const formatCreditCardNumber = (value) => {
    const MASK = "XXXX XXXX XXXX YYYY"

    const digits = value.replace(/\D/g, '')
    let formattedCreditCardNumber = ''
    for (let i = 0, j = 0; i < MASK.length && j < digits.length; i++) {
      if (MASK[i] === "X") {
        formattedCreditCardNumber = `${formattedCreditCardNumber}*`
        j++
      } else if (MASK[i] === "Y") {
        formattedCreditCardNumber = `${formattedCreditCardNumber}${digits[j]}`
        j++
      } else {
        formattedCreditCardNumber = `${formattedCreditCardNumber}${MASK[i]}`
      }
    }

    return formattedCreditCardNumber
  }

  const formatPlainCreditCardNumber = (value) => {
    const MASK = "XXXX XXXX XXXX XXXX"

    const digits = value.replace(/\D/g, '')
    let formattedCreditCardNumber = ''
    for (let i = 0, j = 0; i < MASK.length && j < digits.length; i++) {
      if (MASK[i] === "X") {
        formattedCreditCardNumber = `${formattedCreditCardNumber}${digits[j]}`
        j++
      } else {
        formattedCreditCardNumber = `${formattedCreditCardNumber}${MASK[i]}`
      }
    }

    return formattedCreditCardNumber
  }

  const handleCreditCardChange = (event) => {
    const unformatted = `${creditCard.unformatted}${event.target.value.replace(/\D/g, '')}`
    console.log(`unformatted: ${unformatted}`)

    const MASK = "XXXX XXXX XXXX YYYY"
    if (unformatted.length > MASK.length) {
      return
    }

    setCreditCard({
      unformatted,
      formatted: formatCreditCardNumber(unformatted),
      plainFormatted: formatPlainCreditCardNumber(unformatted)
    })
  }

  const handleShowCreditCardNumber = () => {
    setShowCreditCardNumber(previous => !previous)
  }

  return (
    <div>
      <div>
        <label htmlFor='phone-number'>Phone Number: </label>
        <input
          id='phone-number'
          type='text'
          placeholder='+351 XXX XXX XXX'
          value={phoneNumber.formatted}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='credit-card-number'>
          Credit Card Number:
        </label>
        <input
          id='credit-card-number'
          type='text'
          placeholder='XXXX XXXX XXXX 1234'
          value={showCreditCardNumber ? creditCard.plainFormatted : creditCard.formatted}
          onChange={handleCreditCardChange}
        />
      </div>
      <div>
        <button
          onClick={handleShowCreditCardNumber}
        >
          Show Credit Card Number
        </button>
      </div>
    </div>
  )
}

export default App
