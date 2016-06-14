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
        return (
			<div>
				{pid}
				<p onClick={this._location.bind(this)}>跳转index</p>

		{this.props.children}
			</div>
		)
    }
}

export default Ptype