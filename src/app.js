import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from './components/Counter'
import * as CounterActions from './actions/index'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
	show_bool: state.counter.show_bool,
	adata: state.counter.data
  }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, CounterActions)(Counter)