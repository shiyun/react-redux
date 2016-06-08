import React, { Component, PropTypes } from 'react'
import { Link  } from 'react-router'

class TestCont extends Component {
    render() {       
		const {counter, show_bool, adata} = this.props;
		console.log(`from test: `);
		console.log(this.props);

		let show = String(show_bool);
        return (
            <div>
				<p>{counter}</p>
				<p>{JSON.stringify(adata)}</p>
				<Link to="/app">to index</Link>
            </div>
        )
    }
}

TestCont.propTypes = {
	counter: PropTypes.number.isRequired
}

export default TestCont