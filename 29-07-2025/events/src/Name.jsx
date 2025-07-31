import { useState } from "react";

const Name = () => {

  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
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
    </div>
  )
}

export default Name;
