import { useState } from 'react'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [onlyShowProductsInStock, setOnlyShowProductsInStock] = useState(true)

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleChangeOnlyShowProductsInStock = (event) => {
    setOnlyShowProductsInStock(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
      />
      <input
        id="only-show-products-in-stock"
        type="checkbox"
        value={onlyShowProductsInStock}
        onChange={handleChangeOnlyShowProductsInStock}
      />
      <label htmlFor="only-show-products-in-stock">
        Only show products in stock
      </label>
    </div>
  )
}

export default Search