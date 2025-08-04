import { useState, useEffect } from 'react'
import './App.css'

const styles = {
  countryName: {
    fontWeight: 700
  }
}

const Country = (props) => {
  return (
    <div className='country-container'>
      <p style={styles.countryName}>{props.name}</p>
      <img src={props.flag} style={{ width: '4em', height: '3em', paddingLeft: '0.3em' }} />
    </div>
  )
}

function App() {
  const [countries, setCountries] = useState([])

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all?fields=name,flags')
  //     .then(response => response.json())
  //     .then(data => {
  //       const list = []

  //       data.map(country => list.push({
  //         name: country.name.common,
  //         flag: country.flags.svg
  //       }))

  //       setCountries(list)
  //     })
  //     .catch(error => {
  //       setError('Error while fetching the countries list')
  //       console.error(error)
  //     })
  // }, [])
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

  return (
    <>
      {countries.map(country => <Country key={country.name} {...country} />)}
    </>
  )
}

export default App
