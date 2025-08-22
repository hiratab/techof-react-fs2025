import { memo } from 'react'

import ProductItem from './ProductItem'

const ProductCategoryList = memo((props) => {
  console.log('ProductCategoryList props', props)
  return (
    <div>
      <h4>{props.category}</h4>
      {props.products
        .filter(product => product.name.toUpperCase().includes(props.searchTerm.toUpperCase()))
        .filter((product) => {
          console.log('props.onlyShowProductsInStock', props.onlyShowProductsInStock)
          console.log('!props.onlyShowProductsInStock', !props.onlyShowProductsInStock)
          return !props.onlyShowProductsInStock || product.stock > 0
        })
        .map(product => <ProductItem {...product} />)
      }
    </div>
  )
})

export default ProductCategoryList