import React, { Component, PropTypes } from 'react'
import { Link  } from 'react-router'

class TestCont extends Component {
    render() {       
		const { adata, getData } = this.props;
		console.log(`from test: `);
		console.log(this.props);

        return (
            <div>
				<p>{JSON.stringify(adata)}</p>
				<div><button onClick={()=>getData()}>getData</button></div>
				<br /><br /><br />
				<Link to="/index">to index</Link>
            </div>
        )
    }
}

TestCont.propTypes = {
	adata: PropTypes.object.isRequired
}

export default TestCont