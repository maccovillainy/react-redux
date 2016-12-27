
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/user'
import * as pageactions from '../actions/pageactions'
class App extends Component {
  render() {
  	const { setYear } = this.props.pageactions
    return <div>
      <User setYear={setYear} data={this.props.user.name} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
	return {
		pageactions: bindActionCreators(pageactions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)