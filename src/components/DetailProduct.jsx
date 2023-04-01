import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

const DetailProduct = (props) => {
  return (
    <section className="py-10 px-3 lg:px-0">
      <div className="container mx-auto">
        {props.showProduct.map((item, index) => {
          return (
            <div
              className="flex justify-center items-center gap-10 card-shadow h-96"
              key={index}
            >
              <div className="md:w-1/3">
                <img src={item.image[0]} alt={item.name} />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold truncate capitalize mb-5">
                  {item.name}
                </h2>
                <div className="py-2 flex gap-2">
                  <p className="font-bold w-32">Price </p>
                  <p className="font-semibold md:text-xl text-slate-900">
                    IDR {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="py-2 flex items-center gap-2">
                  <p className="font-bold w-32">Variant </p>
                  {item.variant.map((item) => {
                    return (
                      <p className=" md:text-sm capitalize rounded-lg p-1 cursor-pointer border-[1.5px] border-black">
                        {item.color}
                      </p>
                    )
                  })}
                </div>
                <div className="flex gap-3 mt-8">
                  <button className="w-1/2 py-2 bg-yellow-400">Buy Now</button>
                  <button className="w-1/2 py-2 border-2 border-yellow-400 text-yellow-400">
                    Add To Chart
                  </button>
                </div>
              </div>
            </div>
          )
        })}
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
    handleSomeAct: () => dispatch({ type: ActionType.ADD_SOME_ACTION }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)
