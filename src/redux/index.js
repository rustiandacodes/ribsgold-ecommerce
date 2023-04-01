import ActionType from './globalActionType'

const globalState = {
  showProduct: [],
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SHOW_PRODUCT:
      return {
        ...state,
        showProduct: action.results,
      }
    default:
      return state
  }
}
export default rootReducer
