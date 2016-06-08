import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, Link, History } from 'react-router'
import { Provider } from 'react-redux'
//import { createHistory, createHashHistory, useBasename } from 'history'

import App from './app'
import Test from './test'
import configureStore from './store/configureStore'

const store = configureStore();
//const history = createHistory();

render(
    <Provider store={store}>
        <Router history={ browserHistory }>
            <Route path="/" component={App} />
            <Route path="/app" component={App} />
            <Route path="/test" component={Test} />
        </Router>
    </Provider>,
  document.getElementById('app')
)