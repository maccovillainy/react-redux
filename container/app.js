
import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/user'
class App extends Component {
  render() {
    return <div>
      <User data={this.props.user.name} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    user: state.user
  }
}

export default connect(mapStateToProps)(App)