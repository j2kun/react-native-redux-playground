import * as actions from './actions'

export function counter(state = {value: 0}, action) {
  switch(action.type) {
    case actions.INCREMENT_COUNTER:
       return {value: state.value + 1}
    default:
       return state
  }
}
