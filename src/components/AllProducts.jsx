import { shuffleProducts } from '../service'
import { useState } from 'react'
import { ShoppingBag } from 'react-feather'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState(true)
  const [tshirt, setTshirt] = useState(false)
  const [jacket, setJacket] = useState(false)
  const [oversize, setOversize] = useState(false)
  const [pants, setPants] = useState(false)
  const [accessories, setAccessories] = useState(false)
  return (
    <section className="py-10 px-3 lg:px-0">
      <div className="container mx-auto">
        {/* product categories menu */}
        <ul className="flex flex-wrap justify-center gap-2 text-xs md:text-sm px-2 md:px-0">
          <li
            className={`${
              allProducts === true
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-2 p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              setAllProducts(true)
              setTshirt(false)
              setJacket(false)
              setOversize(false)
              setPants(false)
              setAccessories(false)
            }}
          >
            <span>All Products</span>
          </li>
          <li
            className={`${
              tshirt === true
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-2 p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              setAllProducts(false)
              setTshirt(true)
              setJacket(false)
              setOversize(false)
              setPants(false)
              setAccessories(false)
            }}
          >
            <span>T-Shirt</span>
          </li>
          <li
            className={`${
              jacket === true
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-2 p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              setAllProducts(false)
              setTshirt(false)
              setJacket(true)
              setOversize(false)
              setPants(false)
              setAccessories(false)
            }}
          >
            <span>Jacket/Sweater</span>
          </li>
          <li
            className={`${
              oversize === true
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-2 p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              setAllProducts(false)
              setTshirt(false)
              setJacket(false)
              setOversize(true)
              setPants(false)
              setAccessories(false)
            }}
          >
            <span>Oversize</span>
          </li>
          <li
            className={`${
              pants === true
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-2 p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              setAllProducts(false)
              setTshirt(false)
              setJacket(false)
              setOversize(false)
              setPants(true)
              setAccessories(false)
            }}
          >
            <span>Pants</span>
          </li>
          <li
            className={`${
              accessories === true
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-2 p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              setAllProducts(false)
              setTshirt(false)
              setJacket(false)
              setOversize(false)
              setPants(false)
              setAccessories(true)
            }}
          >
            <span>Accessories</span>
          </li>
        </ul>

        {/* show the product */}
        <div className="mt-10 flex flex-wrap justify-center">
          {shuffleProducts.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer py-6 p-3"
              >
                <div className="shadow-xl rounded-md">
                  <img
                    src={item.image[0]}
                    className="rounded-t-xl"
                    alt={item.name}
                  />
                  <div className="p-3">
                    <h3 className="capitalize font-bold truncate">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="py-2">
                        <p className="text-sm text-slate-900">
                          IDR {item.price.toLocaleString()}
                        </p>
                        <p className="text-xs line-through mt-1 text-slate-700">
                          IDR {(item.price + 54000).toLocaleString()}
                        </p>
                      </div>
                      <ShoppingBag size={24} color="#334155" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    showProducts: state.showProducts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSomeAction: () => dispatch({ type: ActionType.ADD_SOME_ACTION }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
