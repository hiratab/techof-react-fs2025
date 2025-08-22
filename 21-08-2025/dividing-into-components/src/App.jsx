import { useState } from 'react'
import Search from './components/Search'
import ProductCategoriesList from './components/ProductCategoriesList'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [onlyShowProductsInStock, setOnlyShowProductsInStock] = useState(false)

  const products = [
    {
      category: "Sporting Goods",
      products: [
        {
          name: "Football",
          price: "49.99",
          stock: 10
        },
        {
          name: "Baseball",
          price: "9.99",
          stock: 0
        },
        {
          name: "Helmet",
          price: "499.99",
          stock: 0
        }
      ]
    },
    {
      category: "Eletronics",
      products: [
        {
          name: "iPod Touch",
          price: "99.99",
          stock: 0
        },
        {
          name: "iPhone 16",
          price: "999.99",
          stock: 10
        },
        {
          name: "iPhone 16 Pro",
          price: "999.99",
          stock: 10
        }
      ]
    },
    {
      category: "Education",
      products: [
        {
          name: "Book",
          price: "99.99",
          stock: 0
        },
        {
          name: "Notebook",
          price: "9.99",
          stock: 10
        },
        {
          name: "Whiteboard",
          price: "99.99",
          stock: 10
        }
      ]
    }
  ]

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onlyShowProductsInStock={onlyShowProductsInStock}
        setOnlyShowProductsInStock={setOnlyShowProductsInStock}
        />
      <ProductCategoriesList
        categoriesWithProducts={products}
        onlyShowProductsInStock={onlyShowProductsInStock}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default App
