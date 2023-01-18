import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import ConfigureStore from './store/ConfigureStore'

const store = ConfigureStore()
console.log(store.getState())

store.subscribe(()=>{
  console.log('subscribe',store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
