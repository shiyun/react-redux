import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, showdiv } = this.props;
    const num = counter.counter;
    console.log(this.props.counter.counter);   
    //渲染组件，包括一个数字，四个按钮
    return (
      <section>
        <p>
          Clicked: {this.props.counter.counter} times
          {' '}
          <button onClick={increment}>+</button>
          {' '}
          <button onClick={decrement}>-</button>
          {' '}
          <button onClick={incrementIfOdd}>Increment if odd</button>
          {' '}
          <button onClick={() => incrementAsync()}>Increment async</button>
        </p>
        <div><button onClick={()=>showdiv()}>show</button></div>
        <div hidden={this.props.counter.show_bool}>ddddd</div>
      </section>
    )
  }
}
//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.object.isRequired,
  showdiv: PropTypes.func.isRequired
};

export default Counter