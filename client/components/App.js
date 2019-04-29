import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
// import Users from './components/Test1';
// import MainContainer from './containers/MainContainer.jsx';



const mapStateToProps = store => ({
  username: store.userTraffic.username,
  password: store.userTraffic.password,
  verified: store.userTraffic.verified,
  error: store.userTraffic.error
});

const mapDispatchToProps = dispatch => ({
  loginUsername: (event) => {
    dispatch(actions.loginUsername(event.target))
  },
  loginPassword: (event) => {
    dispatch(actions.loginPassword(event.target))
  },
  verifyLogin: (username, password) => {
    dispatch(actions.verifyLogin(username, password))
  },
})
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('TEST', this.props.history)
    return(
      <div>
        <h3>Please Login</h3>
        <label for="loginUsername">Username</label>
        <input type="text" onChange={(e) => this.props.loginUsername(e)} id="username" placeholder="username"></input>
        <label for="loginPassword">Password</label>
        <input type="text" onChange={(e) => this.props.loginPassword(e)} id="password" placeholder="password"></input>
       <button onClick={() => {this.props.verifyLogin(this.props.username, this.props.password)}}>Login</button>
        <br></br>
        <br></br>
        {/* <a href="/test1">Signup</a> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);