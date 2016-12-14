import  React, { Component }  from 'react';
import  ReactDOM, { render }  from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  ee  from 'event-emitter';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import App from './containers/app'
import  configureStore  from  './store/configureStore'
const store = configureStore()

let app = document.querySelector('#hello');


render(
  <Provider store={store}>
    <App />
  </Provider>
  ,app);
 
