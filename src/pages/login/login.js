import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Footer from '../components/footer'
import './login.less'

class Login extends Component {
	constructor(props){
		super(props);
		console.log(this.props.params);
	}

    render() {
        return (
			<div>
				<div>dsdfsdf</div>
				<Footer />
			</div>
		)
    }
}

export default Login