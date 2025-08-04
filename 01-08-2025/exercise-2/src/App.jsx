import { useState, useEffect } from 'react'

import Country from './Country'
import styles from './App.module.css'

function App() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredCountries = countries
    .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase())
      || searchTerm === '')

  return (
    <div className={styles['country-container']}>
      <div>
        <input
          type='text'
          placeholder='Type to search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredCountries.map(country => <Country key={country.name} {...country} />)}
    </div>
  )
}

export default App
