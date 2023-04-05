import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { X } from 'react-feather'

const AddToChart = (props) => {
  const getAddtoChartPrice = props.addToChartProducts.map((item) => item.price)

  const subsTotal = () => {
    let total = 0
    for (let index = 0; index < getAddtoChartPrice.length; index++) {
      total += getAddtoChartPrice[index]
    }
    return total
  }

  return (
    <div
      className={`${
        props.showAddToChart === false ? 'hidden' : 'block'
      } md:px-8 pb-8 z-40 pt-24 right-0 bottom-0 top-0 w-full md:w-1/3 h-screen fixed addtochart-shadow bg-white`}
    >
      <div className="flex justify-between items-center px-8 md:px-5 mb-5">
        <p className="font-bold text-xl">Your Shopping Chart</p>
        <X
          size={30}
          className="cursor-pointer"
          onClick={() => {
            props.handleShowAddToChart(false)
          }}
        />
      </div>
      <div className="h-[70%] p-2 px-5 overflow-scroll">
        {props.addToChartProducts.map((item, index) => {
          return (
            <div
              className="flex gap-8 p-5 h-32 mb-3 bg-white card-shadow rounded-lg"
              key={index}
            >
              <img src={item.image[0]} alt={item.name} />
              <div className="capitalize">
                <p className="font-bold">{item.name}</p>
                <div className="flex gap-3 font-extralight mt-2 text-xs py-1">
                  <p className="font-bold w-14">Total</p>
                  <p>IDR {item.price.toLocaleString()}</p>
                </div>
                <div className="flex gap-3 font-extralight text-xs py-1">
                  <p className="font-bold w-14">Quantity</p>
                  <p> {item.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <hr className="border-2 my-5 bg-slate-300 border-dashed" />
      <div className="flex items-center justify-between">
        <p className="font-bold text-xl">Subs Total</p>
        <p>IDR {subsTotal().toLocaleString()}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    addToChartProducts: state.addToChartProducts,
    showAddToChart: state.showAddToChart,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToChart: (item) =>
      dispatch({ type: ActionType.ADD_TO_CHART, results: item }),
    handleShowAddToChart: (value) =>
      dispatch({ type: ActionType.SHOW_ADD_TO_CHART, results: value }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToChart)
