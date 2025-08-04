import { useState, useEffect } from 'react'
import Country from './Country'

const Option = (props) => {
  return <option key={props.name} value={props.name}>{props.name}</option>
}

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState({})

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
        const data = await response.json()

        const list = []
        data.map(country => list.push({
          name: country.name.common,
          flag: country.flags.svg
        }))

        setCountries(list)
      } catch (error) {
        setError('Error while fetching the countries list')
        console.error(error)
      }
    }

    fetchCountries()
  }, [])

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    const country = countries.find(
      ({ name }) => name.toLowerCase() === selectedOption.toLowerCase()
    )

    setSelectedCountry(country)
  }

  return (
    <>
      <select onChange={handleChange} defaultValue="">
        {countries.map(country => <Option key={country.name} {...country} />)}
      </select>
      <div>
        {!selectedCountry.name && <p>Select a country from the list</p>}
        {selectedCountry.name && <Country {...selectedCountry} />}
      </div>
    </>
  )
}

export default App
