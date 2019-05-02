import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../actions/actions';

import Login from './Login.jsx';

let homeloaded = false;
let signuploaded = false;

const mapStateToProps = store => ({
  username: store.userTraffic.username,
  password: store.userTraffic.password,
  verified: store.userTraffic.verified,
  error: store.userTraffic.error,
  needsToSignup: store.userTraffic.needsToSignup,
});

const mapDispatchToProps = dispatch => ({
  loginUsername: (event) => {dispatch(actions.loginUsername(event.target))},
  loginPassword: (event) => {dispatch(actions.loginPassword(event.target))},
  verifyLogin: (username, password) => {dispatch(actions.verifyLogin(username, password))},
  signup: () => {dispatch(actions.signup())},
})


class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.verified === true) {
      return <Redirect to="/Home"></Redirect>
    }
    else if (this.props.needsToSignup === true && signuploaded === false) {
      signuploaded = true;
      return <Redirect to="/signup"></Redirect>
    }

    return (
      <div>
        <Login
        loginPassword={this.props.loginPassword}
        loginUsername={this.props.loginUsername}
        verifyLogin={this.props.verifyLogin}
        signup={this.props.signup}
        />
      </div>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
