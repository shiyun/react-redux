import React, { Component, PropTypes } from 'react'
import { Link  } from 'react-router'

class TestCont extends Component {
    render() {       
		const {counter} = this.props;
        return (
            <div>
				<p>{counter}</p>
				<Link to="/app">to index</Link>
            </div>
        )
    }
}

TestCont.propTypes = {
	counter: PropTypes.number.isRequired
}

export default TestCont