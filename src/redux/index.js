import ActionType from './globalActionType'
const globalState = {
  showProducts: [],
}

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.ADD_SOME_ACTION:
      return {
        ...state,
        showProducts: ['mencoba'],
      }
    default:
      return state
  }
}
export default rootReducer
