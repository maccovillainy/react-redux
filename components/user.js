import  React,  { PropTypes,  Component } from  'react'
export  default class User  extends Component {
	onYearBtnClick(e) {
		console.log(+e.target.innerHTML)
		this.props.setYear(++e.target.innerHTML)
	}
    render()  {
        const { name  } = this.props
        return  <div>
            <p>Привет!{this.props.data}</p>
            <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
        </div>
    }
}