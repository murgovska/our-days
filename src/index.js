import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
// import routes from './routes'
import App from './App'
import './index.scss'
import configureStore from './reducers/store'

const store = configureStore()
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    {/* <Router history={history} routes={routes} /> */}
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
   </Provider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
