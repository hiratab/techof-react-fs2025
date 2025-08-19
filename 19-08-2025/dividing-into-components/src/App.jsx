import { useState } from 'react'
import Search from './Search'
import ProductCategoriesList from './ProductCategoriesList'

function App() {

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
          name: "Capacete",
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
      <Search />
      <ProductCategoriesList categoriesWithProducts={products} />
    </div>
  )
}

export default App
