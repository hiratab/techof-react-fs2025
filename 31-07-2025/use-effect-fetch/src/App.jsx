import { useState, useEffect } from 'react'

function App() {
  const [country, setCountry] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/Brasil948485859904')
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch the country data")
        }

        return response.json();
      })
      .then(([countryData]) => {
        setCountry(countryData)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading Country Data....</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} />
    </div>
  )
}

export default App
