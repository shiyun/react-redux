import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Footer from '../components/footer'
import './index.less'

class Index extends Component {
    render() {
        return (
			<div>
				<section className="cont">
					<img src="/images/banner.jpg" width="100%" />
				</section>

				<section className="cont pb120">
					<ul className="list-proIndex">
						<li>
							<a href="/ptype/1"><img src="/images/img1.png" width="100%" /></a>
						</li>
						<li>
							<a href="/ptype/2"><img src="/images/img2.png" width="100%" /></a>
						</li>
						<li>
							<a href="/ptype/3"><img src="/images/img3.png" width="100%" /></a>
						</li>
						<li>
							<a href="/ptype/4"><img src="/images/img4.png" width="100%" /></a>
						</li>
					</ul>
				</section>
				<Footer />
			</div>
		)
    }
}

export default Index