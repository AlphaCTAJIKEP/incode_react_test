import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Route,Router,browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from 'reducers'
import Layout from 'containers/Layout'
import Home from 'components/Home'

import './index.css'

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={Home}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
