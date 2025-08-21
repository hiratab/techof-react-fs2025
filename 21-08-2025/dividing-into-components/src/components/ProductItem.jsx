import { memo } from 'react'

import formatPrice from "../utils/formatPrice"

const ProductItem = memo((props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <p>{props.name}</p>
      <p>{formatPrice(props.price)}</p>
    </div>
  )
})

export default ProductItem