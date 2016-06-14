import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Link, History } from 'react-router'
import { Provider } from 'react-redux'
//import { createHistory, createHashHistory, useBasename } from 'history'

import Index from './pages/index'
import Login from './pages/Login/login'
import Ptype from './pages/Login/ptype'
import Test from './test'
import configureStore from './store/configureStore'
import './less/styles.less'

const store = configureStore();
//const history = createHistory();

render(
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/" component={Index} />
            <Route path="/index" component={Index} />
            <Route path="/login/:id" component={Login} />
            <Route path="/ptype/:id" component={Ptype}>
                <Route path="/test" component={Test} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('app')
)
