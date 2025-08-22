import { useState } from 'react'

const Search = (props) => {

  const handleChange = (event) => {
    props.setSearchTerm(event.target.value)
  }

  const handleChangeOnlyShowProductsInStock = (event) => {
    console.log('handleChangeOnlyShowProductsInStock', event.target.checked)
    props.setOnlyShowProductsInStock(event.target.checked)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Search...'
        value={props.searchTerm}
        onChange={handleChange}
      />
      <input
        id="only-show-products-in-stock"
        type="checkbox"
        value={props.onlyShowProductsInStock}
        onChange={handleChangeOnlyShowProductsInStock}
      />
      <label htmlFor="only-show-products-in-stock">
        Only show products in stock
      </label>
    </div>
  )
}

export default Search