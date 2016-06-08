export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const GET_DATA = 'GET_DATA'
export const SHOW_BOOL = 'SHOW_BOOL'
import httpService from '../utils/service'
//导出加一的方法
export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}
//导出减一的方法
export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}
//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd() {
  return (dispatch, getState) => {
    let states = getState();
    console.log(states);
    //获取state对象中的counter属性值
    const  counter = states.counter.counter;

    //偶数则返回
    if (counter % 2 === 0) {
      return ;
    }
    //没有返回就执行加一
    dispatch(increment())
  }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

export function showdiv(){
  return{
    type: SHOW_BOOL
  }
}

export function getData(){
  return dispatch=>{
    return httpService.get('/testApi', 'POST', { number:4, type:1 }, res=>dispatch({data: res, type: GET_DATA}), err=>console.log(err));
  }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export