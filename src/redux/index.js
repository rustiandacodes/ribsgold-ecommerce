import ActionType from './globalActionType'
import { shuffleProducts } from '../service'

const globalState = {
  showProducts: shuffleProducts,
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SHOW_PRODUCT:
      return {
        ...state,
        showProducts: action.results,
      }
    default:
      return state
  }
}
export default rootReducer
