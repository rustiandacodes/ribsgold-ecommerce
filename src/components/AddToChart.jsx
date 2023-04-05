import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import { X } from 'react-feather'

const AddToChart = (props) => {
  return (
    <div
      className={`${
        props.showAddToChart === false ? 'hidden' : 'block'
      } md:px-8 pb-8 z-40 pt-24 right-0 bottom-0 top-0 w-full md:w-1/2 h-screen fixed addtochart-shadow bg-white`}
    >
      <div className="flex justify-end px-8 md:px-0 mb-5">
        <X
          size={30}
          className="cursor-pointer"
          onClick={() => {
            props.handleShowAddToChart(false)
          }}
        />
      </div>
      <div className="h-screen p-2 pb-24 px-5 overflow-scroll">
        {props.addToChartProducts.map((item) => {
          return (
            <div className="flex gap-3 p-5 h-48 mb-3 bg-white card-shadow rounded-lg">
              <img src={item.image[0]} alt={item.name} />
              <p className="w-1/2">{item.name}</p>
            </div>
          )
        })}
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
