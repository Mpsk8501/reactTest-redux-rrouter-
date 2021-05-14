import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import reducers from './redux/reducers'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const compose = composeWithDevTools(middlewareEnhancer)
const store = createStore(reducers, undefined, compose)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
