import { useState } from "react";

const TrueMessage = () => <p>É Verdadeiro</p>
const FalseMessage = () => <p>É falso</p>

const evaluateName = (name) => {
  if (name.length <= 1) {
    return <TrueMessage />
  }

  return <FalseMessage />
}

const Name = () => {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [flats, setFlats] = useState([])

  const handleChange = (event) => {
    setName(event.target.value)
    setIsError(event.target.value.length <= 1 )
  }

  return (
    <div>
      <input
        type='text'
        value={name}
        placeholder="Insert your name"
        onChange={handleChange}
      />
      <p>{name}</p>
      {name.length <= 1 && name !== ''
        && <p>Error: The name must be bigger than 1 character</p>}
      {isError 
        && <p>isError: The name must be bigger than 1 character</p>}
      {name.toUpperCase() === 'Bruno'.toUpperCase()
        ? <TrueMessage />
        : <FalseMessage />}
      {evaluateName(name)}
    </div>
  )
}

export default Name;
