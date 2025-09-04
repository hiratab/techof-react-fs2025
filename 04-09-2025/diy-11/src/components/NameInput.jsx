import { useContext } from 'react'

import NameContext from '../context/NameContext'

function NameInput() {
  const {
    name,
    setName
  } = useContext(NameContext)

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <label htmlFor='name'>
        Name:
      </label>
      <input
        type='text'
        id='name'
        onChange={handleChange}
      />
    </div>
  )
}

export default NameInput
