import {GET_DATA} from '../actions'

export default function test(state = {data:{}}, action){
    switch(action.type){
        case GET_DATA:
            return Object.assign({}, state, {data: action.data})
        default:
            return state;
    }
}