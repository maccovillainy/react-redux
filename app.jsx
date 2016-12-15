
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import App from './container/app'
import { combineReducers } from 'redux'

const initialState1  = {
    name: 'Василий'
}

function user(state = initialState1){
  return state
}

///////////////

const initialState2  = {
    year: 2000
}

function page(state = initialState2){
  return state
}

//////////////////


let rootReducer = combineReducers({
  page,
  user
}) 

const store = createStore(rootReducer)




render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)