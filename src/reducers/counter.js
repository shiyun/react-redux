import { INCREMENT_COUNTER, DECREMENT_COUNTER, SHOW_BOOL } from '../actions/counter'
let initState = {
	counter: 0,
	show_bool: false
}
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = initState, action) {	
  switch (action.type) {
    case INCREMENT_COUNTER:
    	state.counter += 1
      return state
    case DECREMENT_COUNTER:
    	state.counter -= 1
      return state
    case SHOW_BOOL:    
    	state.show_bool = !state.show_bool;
      return state
    default:
      return state
  }
}