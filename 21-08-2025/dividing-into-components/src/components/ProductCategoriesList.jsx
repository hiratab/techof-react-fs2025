import ProductCategoryList from './ProductCategoryList'

const ProductCategoriesList = (props) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <p>Name</p>
        <p>Price</p>
      </div>
      {props.categoriesWithProducts.map(categoryWithProducts => {
        return <ProductCategoryList {...categoryWithProducts} searchTerm={props.searchTerm} />
      })}
    </div>
  )
}

export default ProductCategoriesList