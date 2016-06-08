'use strict';
/*
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageItem extends Component {
	constructor(props){
		super(props);
	}

	handleClick(){
      console.log('you clicked '+this.props.message);
	}

	render() {
		return <li onClick={this.handleClick.bind(this)}>{this.props.message}</li>;
	}
}

class MessageList extends Component {
	constructor(props){
		super(props);
	}

	handleClick(){
      console.log('you clicked '+this.props.message);
	}

	render() {
		const msgItems = this.props.messages.map(function(value, index) {
			return <MessageItem key={index} message={index+ " " + value} />
		}, this)
		
		return (
		  <ul> {msgItems} </ul>
		)
	}
}

const messages = [
  "Hello world!", "Goodbye y'all!", "Is it dinner yet?", 
  "Cats are fun!", "But dogs are funnerddd!!!"
];

ReactDOM.render(<MessageList messages={messages} />, document.getElementById('app'));
*/

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