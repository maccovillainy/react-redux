import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gallary from '../components/gallary'
class App extends Component{
  render(){
    console.log(this.props)
    return <div>
      <Gallary 
        change={this.props.setName} 
        del={this.props.del} 
        data={this.props.data}/>
    </div>
  }
}

const get = (state) => {
  return{
    data: state
  }
}
const set = (dispatch) => {
  return {
    setName: (name, id) => {
      dispatch({
        type: 'SET',
        payload: {
          name,
          id
        }
      })
    },
    del: (id) => {
      dispatch({
        type: 'DEL',
        payload:id
      })
    }
  }
}
export default connect(get, set)(App)