import { useState } from 'react'

function App() {
  const [phoneNumber, setPhoneNumber] = useState({
    unformatted: '',
    formatted: ''
  })

  const formatPhoneNumber = (value) => {
    console.log(`formatPhoneNumber value: ${value}`)

    const unformattedPhoneNumber = value.replace(/(?:\+351)?\D*/g, '');
    const MASK = "XXX XXX XXX"

    let formattedPhoneNumber = '+351 '
    for (let i = 0, j = 0; i < MASK.length  && j < unformattedPhoneNumber.length; i++) {
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

  return (
    <div>
      <label htmlFor="phone-number">Phone Number: </label>
      <input
        id="phone-number"
        type="text"
        placeholder="+351 XXX XXX XXX"
        value={phoneNumber.formatted}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
