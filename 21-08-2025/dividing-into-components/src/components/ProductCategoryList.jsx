import { memo } from 'react'

import ProductItem from './ProductItem'

const ProductCategoryList = memo((props) => {
  return (
    <div>
      <h4>{props.category}</h4>
      {props.products
        .filter(product => product.name.toUpperCase().includes(props.searchTerm.toUpperCase()))
        .map(product => <ProductItem {...product} />)
      }
    </div>
  )
})

export default ProductCategoryList