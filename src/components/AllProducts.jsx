import { shuffleProducts } from '../service'
import { ShoppingBag } from 'react-feather'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'

const AllProducts = (props) => {
  const parameter = useParams()
  const navigate = useNavigate()

  const filterProducts = () => {
    if (parameter) {
      const filter = shuffleProducts.filter(
        (item) => item.category === parameter.category,
      )
      return filter
    } else {
      return shuffleProducts
    }
  }

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
            } border-[1.8px] font-medium p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products')
              props.handleCategory(shuffleProducts)
            }}
          >
            <span>All Products</span>
          </li>
          <li
            className={`${
              parameter.category === 't-shirt'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-medium p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/t-shirt')
              props.handleCategory(filterProducts())
            }}
          >
            <span>T-Shirt</span>
          </li>
          <li
            className={`${
              parameter.category === 'jacket-sweater'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-medium p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/jacket-sweater')
              props.handleCategory(filterProducts())
            }}
          >
            <span>Jacket/Sweater</span>
          </li>
          <li
            className={`${
              parameter.category === 'oversize'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-medium p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/oversize')
              props.handleCategory(filterProducts())
            }}
          >
            <span>Oversize</span>
          </li>
          <li
            className={`${
              parameter.category === 'pants'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-medium p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/pants')
              props.handleCategory(filterProducts())
            }}
          >
            <span>Pants</span>
          </li>
          <li
            className={`${
              parameter.category === 'accessories'
                ? 'bg-yellow-400 border-yellow-400'
                : ' border-black'
            } border-[1.8px] font-medium p-2 cursor-pointer rounded-lg`}
            onClick={() => {
              navigate('/products/accessories')
              props.handleCategory(filterProducts())
            }}
          >
            <span>Accessories</span>
          </li>
        </ul>

        {/* show the product */}
        <div className="mt-10 flex flex-wrap justify-center">
          {props.showProducts.map((item, index) => {
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
    handleCategory: (items) =>
      dispatch({ type: ActionType.CHANGE_SHOW_PRODUCT, results: items }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
