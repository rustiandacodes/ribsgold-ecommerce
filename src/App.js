import './App.css'
// import { data } from './data'
import { products } from './service'
function App() {
  return (
    <div className="App">
      <div className="uppercase text-2xl font-extrabold">ribsgold</div>
      {products.map((product, index) => {
        console.log(product.image)
        return (
          <div key={index}>
            <p>{product.name}</p>
            <div className="flex gap-3 justify-center">
              {product.image.map((image) => (
                <img
                  className="w-1/4 rounded-xl shadow-lg"
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
