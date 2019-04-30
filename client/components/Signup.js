import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';

let homeAfterSignupLoaded = false;

const mapStateToProps = store => ({
  username: store.userTraffic.username,
  password: store.userTraffic.password,
  userCreated: store.userTraffic.userCreated,
});

const mapDispatchToProps = dispatch => ({
  loginUsername: (event) => {
    dispatch(actions.loginUsername(event.target))
  },
  loginPassword: (event) => {
    dispatch(actions.loginPassword(event.target))
  },
  createuser: (username, password) => {
    dispatch(actions.createuser(username, password))
  }
})

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      if (this.props.userCreated === true && homeAfterSignupLoaded === false) {
        homeAfterSignupLoaded = true;
        return <Redirect to="/Home"></Redirect>
      }
      return (
        <div>
        <h3>Signup</h3>
        <label for="loginUsername">Username</label>
        <input type="text" onChange={(e) => this.props.loginUsername(e)} id="username" placeholder="username"></input>
        <label for="loginPassword">Password</label>
        <input type="password" onChange={(e) => this.props.loginPassword(e)} id="password" placeholder="password"></input>
        <button onClick={(e) => { e.preventDefault(); this.props.createuser(this.props.username, this.props.password)}}>Create Account</button>
        </div>
    )
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Signup);