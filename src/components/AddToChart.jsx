import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { X } from 'react-feather'
import { Trash2 } from 'react-feather'
import shopingIlustration from '../assets/shopping ilustration.svg'

const AddToChart = (props) => {
  const getAddtoChartPrice = props.addToChartProducts.map(
    (item) => item.price * item.qty,
  )

  const subsTotal = () => {
    let total = 0
    for (let index = 0; index < getAddtoChartPrice.length; index++) {
      total += getAddtoChartPrice[index]
    }
    return total
  }

  const handleRemoveOneOfTheItem = (key) => {
    const currentProducts = props.addToChartProducts.filter(
      (item) => item.name !== key,
    )
    props.handleUpdateAddToChartProducts(currentProducts)
  }

  const ContinueBrowser = () => {
    return (
      <div className="flex flex-col px-8 items-center justify-center h-fit pt-16">
        <img
          src={shopingIlustration}
          className="w-64"
          alt="shop-illustration"
        />
        <p className="my-5">No products selected</p>
        <button
          className="text-md shadow-lg font-semibold bg-yellow-400 hover:opacity-80 py-2 px-4 rounded-lg text-white"
          onClick={() => {
            props.handleShowAddToChart(false)
          }}
        >
          Continue Browser
        </button>
      </div>
    )
  }

  const ShowChart = () => {
    return (
      <div>
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
        <div className="md:h-96 h-[40rem] p-2 px-5 overflow-scroll">
          {props.addToChartProducts.map((item, index) => {
            return (
              <div
                className="flex gap-5 p-5 h-44 mb-3 bg-white card-shadow rounded-lg relative"
                key={index}
              >
                <Trash2
                  size={20}
                  color="#334155"
                  className="absolute right-4 bottom-5  cursor-pointer"
                  onClick={() => {
                    handleRemoveOneOfTheItem(item.name)
                  }}
                />
                <img src={item.img[0]} alt={item.name} />
                <div className="capitalize">
                  <p className="font-bold truncate mb-2">{item.name}</p>
                  <div className="flex gap-3 font-extralight text-xs py-1">
                    <p className="font-bold w-14">Variant</p>
                    <p>
                      {' '}
                      {item.variant.length === 0 ? 'No Variant' : item.variant}
                    </p>
                  </div>
                  <div className="flex gap-3 font-extralight text-xs py-1">
                    <p className="font-bold w-14">size</p>
                    <p>{item.size.length === 0 ? 'Unisex' : item.size}</p>
                  </div>
                  <div className="flex gap-3 font-extralight text-xs py-1">
                    <p className="font-bold w-14">Total</p>
                    <p>IDR {item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-3 font-extralight text-xs py-1">
                    <p className="font-bold w-14">Qty</p>
                    <p> {item.qty}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="px-8">
          <hr className="border-2 my-5 bg-slate-300 border-dashed" />
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl">Subs Total</p>
            <p>IDR {subsTotal().toLocaleString()}</p>
          </div>
        </div>
      </div>
    )
  }

  console.log(props.addToChartProducts)

  return (
    <div
      className={`${
        props.showAddToChart === false ? 'hidden' : 'block'
      } md:px-8 pb-8 z-40 pt-24 right-0 bottom-0 top-0 w-full md:w-1/2 h-screen fixed addtochart-shadow bg-white`}
    >
      {props.addToChartProducts.length === 0 ? (
        <ContinueBrowser />
      ) : (
        <ShowChart />
      )}
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
    handleUpdateAddToChartProducts: (value) =>
      dispatch({ type: ActionType.UPDATE_ADD_TO_CHART, results: value }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToChart)
