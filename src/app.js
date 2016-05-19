'use strict';
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
		return <li onClick={this.handleClick}>{this.props.message}</li>;
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
  "Cats are fun!", "But dogs are funner!!!"
];

ReactDOM.render(<MessageList messages={messages} />, document.getElementById('app'));