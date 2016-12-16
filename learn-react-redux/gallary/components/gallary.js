import React, { Component } from 'react'

/*@connect((state, props) => {
  return {
    data: state.data
  }
}, (dispatch, props) => {
  return bindActionCreators({
    change: (dispatch) => {
      //dispatch({type:}) 
    }
  }, dispatch)
})*/
export default class Gallary extends Component{
  render(){
    return(
      <div>
        {this.props.data.map(item => (
          <div 
          style={{
            border: '1px solid tomato',
            padding: 20, 
            margin: 20, 
            display: 'inline-block'
          }} 
          key={item.id}>
            <h2> {item.name} </h2>
            <input 
              data-id={item.id} 
              onChange={e =>{ 
                this.props.change(e.target.value, e.target.getAttribute('data-id'))}
              } 
              value={item.name} />
              <button data-id={item.id}
                onClick={(e)=> this.props.del(e.target.getAttribute('data-id'))}>Delete</button>
              }
          </div>
        ))}
      </div>
    )
  }
}