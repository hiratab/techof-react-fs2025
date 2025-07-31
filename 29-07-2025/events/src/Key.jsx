import { useState } from 'react'

const Key = () => {
  const [keyPressed, setKeyPressed] = useState('')

  const handleKeyDown = (event) => {
    console.log('event.key', event.key)
    setKeyPressed(event.key)
  }

  return (
    <div>
      <input
        onKeyDown={handleKeyDown}
        onClick={handleKeyDown}
      />
      <p>
        Key pressed: {keyPressed}
      </p>
    </div>
  )

}

export default Key