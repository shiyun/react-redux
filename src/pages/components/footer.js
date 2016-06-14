import React, { Component } from 'react'
import {Link} from 'react-router'

class Footer extends Component {
	_appDownload(){
		const qdID = "9021",
		apiUrl = "http://api.alpha.haolawyers.cn/",
		downLoadUrl = "http://app.pocketlawyer.cn/customer_ewm/" + qdID;
		window.open(downLoadUrl)
	}

    render() {
        return (
		<footer className="footer-index">
			<a href="javascript:;" onClick={this._appDownload} className="downWrap"><img src="/images/down.png" width="100%" /></a>
		</footer>	
		)
    }
}

export default Footer