import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './containers/app'
import { Provider } from 'react-redux'
const db = [
{
  id: 1,
  name: 'John'
},
{
  id: 2,
  name: 'Bob'
},
{
  id: 3,
  name: 'BILL'
},
]

/*defaultStates = {
  data: []
}*/

const reducer = (state = db, action) => {
  switch (action.type){
    case 'SET':
    state = state.map(item =>{
      if (item.id == action.payload.id) item.name = action.payload.name
        return item
    })
    /*state = {
      ...state,
      data: state
    }*/
    break;
    case 'DEL':
    state = state.filter(item => item.id != action.payload)
    break;
  }
  return state
}

const store = createStore(reducer); // {name: reducer}

render(
  <Provider store={store} >
    <App />
  </Provider>
  ,root)