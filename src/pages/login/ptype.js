import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Footer from '../components/footer'
import './login.less'

class Ptype extends Component {
	_location(){
		this.props.history.pushState(null,`/test`);
	}
	render() {
		const pid = !this.props.params.id ? '' : <span>{this.props.params.id}</span>;
		//let input2 = !this.props.params.id ? <input placeholder="test1" className="test1" /> : <input placeholder="3333333" className="test2" />;
        return (
			<section>
				<p>{
				this.props.params.id ? <input placeholder="test1" defaultValue="" className="test1" /> : <input placeholder="3333333" defaultValue="333" className="test2" />
				}</p>
				<p onClick={this._location.bind(this)}>跳转index</p>
				{this.props.children}
			</section>
		)
    }
}

export default Ptype