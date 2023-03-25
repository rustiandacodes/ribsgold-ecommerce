import './App.css'
import { products } from './service'
import { useEffect, useState } from 'react'

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    setProduct(products)
  }, [product])

  return (
    <div className="App">
      {product.map((product, index) => {
        return (
          <div key={index}>
            <p>{product.name}</p>
            <img
              src={require(`./asstets/products/${product.image[0]}`)}
              alt=""
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
