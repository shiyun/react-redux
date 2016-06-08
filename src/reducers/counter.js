import { INCREMENT_COUNTER, DECREMENT_COUNTER, SHOW_BOOL, GET_DATA } from '../actions/index'
let initState = {
	counter: 0,
	show_bool: false,
    data: {}
}
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = initState, action) {	
  switch (action.type) {
    case INCREMENT_COUNTER:
        const obj = Object.assign({}, state, {counter: state.counter+1});
        console.log(obj);
      return obj;
    case DECREMENT_COUNTER:    	
      return Object.assign({}, state, {counter: state.counter-1})
    case SHOW_BOOL:    
    	//state.show_bool = !state.show_bool;
      return Object.assign({}, state, {show_bool: !state.show_bool})
    case GET_DATA:
          return Object.assign({}, state, {data: action.data})
    default:
      return state
  }
}