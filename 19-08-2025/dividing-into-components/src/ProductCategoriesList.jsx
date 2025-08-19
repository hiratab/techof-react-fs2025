import { memo } from 'react'

import formatPrice from "./formatPrice"

const ProductItem = memo((props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <p>{props.name}</p>
      <p>{formatPrice(props.price)}</p>
    </div>
  )
})

const ProductCategoryList = memo((props) => {
  return (
    <div>
      <h4>{props.category}</h4>
      {props.products.map(product => <ProductItem {...product} />)}
    </div>
  )
})

const ProductCategoriesList = (props) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>Name</p>
        <p>Price</p>
      </div>
      {props.categoriesWithProducts.map(categoryWithProducts => {
        return <ProductCategoryList {...categoryWithProducts} />
      })}
    </div>
  )
}

export default ProductCategoriesList