import { useState } from 'react'

function App() {
  const [selectedWeather, setSelectedWeather] = useState('sunny')

  const handleChange = (event) => {
    setSelectedWeather(event.target.value)
  }

  return (
    <div>
      <p>Choose the current weather:</p>
      <select
        value={selectedWeather}
        onChange={handleChange}
      >
        <option value="sunny">Sunny</option>
        <option value="raining">Raining</option>
        <option value="snowing">Snowing</option>
      </select>
      <p>It is {selectedWeather} outside</p>
    </div>
  )
}

export default App
