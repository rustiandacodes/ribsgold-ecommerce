import { shuffleProducts } from '../service'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const AllProducts = (props) => {
  const parameter = useParams()
  const navigate = useNavigate()
  const [productByCategory, setProductByCategory] = useState([])

  useEffect(() => {
    const filterProducts = (key) => {
      const filter = key
        ? shuffleProducts.filter((item) => item.category === key)
        : shuffleProducts
      setProductByCategory(filter)
    }
    filterProducts(parameter.category)
  }, [parameter.category])

  return (
    <section className="py-10 px-3 lg:px-0">
      <div className="container mx-auto">
        {/* product categories menu */}
        <ul className="flex flex-wrap justify-center gap-2 text-xs md:text-sm px-2 md:px-0">
          <li
            className={`${
              parameter.category === undefined
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-semibold p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products')
            }}
          >
            <span>All Products</span>
          </li>
          <li
            className={`${
              parameter.category === 't-shirt'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-semibold p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/t-shirt')
            }}
          >
            <span>T-Shirt</span>
          </li>
          <li
            className={`${
              parameter.category === 'jacket-sweater'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-semibold p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/jacket-sweater')
            }}
          >
            <span>Jacket/Sweater</span>
          </li>
          <li
            className={`${
              parameter.category === 'oversize'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-semibold p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/oversize')
            }}
          >
            <span>Oversize</span>
          </li>
          <li
            className={`${
              parameter.category === 'pants'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-semibold p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/pants')
            }}
          >
            <span>Pants</span>
          </li>
          <li
            className={`${
              parameter.category === 'accessories'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-semibold p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/accessories')
            }}
          >
            <span>Accessories</span>
          </li>
        </ul>

        {/* show the product */}
        <div className="mt-10 flex flex-wrap justify-center">
          {productByCategory.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer py-6 p-3"
                onClick={() => {
                  props.handleShowProduct([item])
                  navigate('/detail')
                }}
              >
                <div className="card-shadow rounded-xl">
                  <img
                    src={item.image[0]}
                    className="rounded-t-xl"
                    alt={item.name}
                  />
                  <div className="p-3">
                    <h3 className="capitalize font-bold text-sm md:text-lg truncate">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="py-2">
                        <p className="text-xs font-semibold md:text-sm text-slate-900">
                          IDR {item.price.toLocaleString()}
                        </p>
                        <p className="text-xs line-through mt-1 text-slate-700">
                          IDR {(item.price + 54000).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-slate-700">
                        <AiFillStar className="text-yellow-400 text-xl" />
                        <p>4.5</p>
                      </div>
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
    showProduct: state.showProduct,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowProduct: (items) =>
      dispatch({ type: ActionType.CHANGE_SHOW_PRODUCT, results: items }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
