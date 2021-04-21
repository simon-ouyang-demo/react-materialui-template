import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import history from './utils/history'
import { createMonitor } from './utils/monitor'

createMonitor()

ReactDOM.render(
  <>
    <Router history={history}>
      <App />
    </Router>
  </>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
