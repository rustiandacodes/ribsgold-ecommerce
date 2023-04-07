import ActionType from './globalActionType'

const globalState = {
  showProducts: [],
  addToChartProducts: [],
  showAddToChart: false,
  pageNow: '',
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
    case ActionType.UPDATE_ADD_TO_CHART:
      return {
        ...state,
        addToChartProducts: action.results,
      }
    case ActionType.CHANGE_PAGE:
      return {
        ...state,
        pageNow: action.results,
      }
    default:
      return state
  }
}
export default rootReducer
