import ActionType from './globalActionType'

const globalState = {
  showProducts: [],
  addToChartProducts: [],
  showAddToChart: false,
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SHOW_PRODUCT:
      return {
        ...state,
        showProducts: action.results,
      }
    case ActionType.ADD_TO_CHART:
      return {
        ...state,
        addToChartProducts: state.addToChartProducts.concat(action.results),
      }
    case ActionType.SHOW_ADD_TO_CHART:
      return {
        ...state,
        showAddToChart: action.results,
      }
    default:
      return state
  }
}
export default rootReducer
