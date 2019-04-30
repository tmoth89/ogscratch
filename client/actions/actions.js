import * as types from '../constants/actionTypes';
const axios = require('axios');
import thunk from 'redux-thunk';

//For user login
export const loginUsername = (username) => ({
  type: types.LOGIN_USERNAME,
  payload: username
});

//For user password
export const loginPassword = (password) => ({
  type: types.LOGIN_PASSWORD,
  payload: password
});

//This is where we use THUNK. This action creator makes a POST request to the server to verify username and password entered when logging in.
export const verifyLogin = (username, password) => (dispatch) => {
  console.log('LOGIN SENT TO VERIFYLOGIN')
  console.log('THIS IS USERNAME', username)
  console.log('THIS IS PASSWORD', password)
  axios({
    method: 'post',
    url: '/api/testsignin', //test api route
    data: { 'username': username, 'password': password }, //must send body of data in this format
  })
    .then(response => {
      console.log('this is res', response.data)
      //Once we receive a "no error" response from server, we dispatch action creator postUsernameAndPasswordSuccess
      //Dispatch takes an object as an argument (action creator object)
      return dispatch(
        postUsernameAndPasswordSuccess({
          type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
          payload: response.data
        })
      )
    })
    //If we receive an error from the server (i.e. incorrect username or password), we dispatch action creator postUsernameAndPasswordFailure
    .catch(
      error => dispatch(
        postUsernameAndPasswordFailure({
          type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
          payload: error
        })
      )
    )
}

//Used above in verifyLogin, utilizing THUNK 
export const postUsernameAndPasswordSuccess = (res) => ({
  type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
  payload: res
});

export const postUsernameAndPasswordFailure = (err) => ({
  type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
  payload: err
});

//This action creator is deployed when a user clicks the button Signup (go to component Signin)
export const signup = () => ({
  type: types.SIGNUP,
  payload: true
});

//Using THUNK. Once a user enters a username and password, and clicks button Create Account (go to component Signup), this action creator sends a POST request to server. 
export const createuser = (username, password) => (dispatch) => {
  console.log('in createuser function about to post request')
  axios({
    method: 'post',
    url: '/api/testauth', //test api route
    data: { 'username': username, 'password': password },
  })
    .then(response => {
      //Once we receive a "no error" response from server, we dispatch action creator postCreateUserSuccess
      //Dispatch takes an object as an argument (action creator object)
      return dispatch(
        postCreateUserSuccess({
          type: types.POST_CREATE_USER_SUCCESS,
          payload: response.data
        })
      )
    })
    //If we receive an error from the server (i.e. missing username or password), we dispatch action creator postCreateUserFailure
    .catch(
      error => dispatch(
        postCreateUserFailure({
          type: types.POST_CREATE_USER_FAILURE,
          payload: error
        })
      )
    )
};

//Used above in action creator createUser (utilizing THUNK)
export const postCreateUserSuccess = (res) => ({
  type: types.POST_CREATE_USER_SUCCESS,
  payload: res
});

//Used above in action creator createUser (utilizing THUNK)
export const postCreateUserFailure = (err) => ({
  type: types.POST_CREATE_USER_FAILURE,
  payload: err
});

//After successfully logging in or signing up, react router routes to '/home' (go to component Home), we utilize THUNK to make a GET the artwork data stored in the database
export const getArt = () => (dispatch) => {
  console.log('in getArt function about to get request')
  axios({
    method: 'get',
    url: '/api/getallart' //api test route
  })
    .then(response => {
      //Once we receive a "no error" response from server, we dispatch action creator postGetArtSuccess
      //Dispatch takes an object as an argument (action creator object)
      return dispatch(
        postGetArtSuccess({
          type: types.POST_GET_ART_SUCCESS,
          payload: response.data
        })
      )
    })
    .catch(
      //If we receive an error from the server (i.e. something failed), we dispatch action creator postGetArtFailure
      error => dispatch(
        postGetArtFailure({
          type: types.POST_GET_ART_FAILURE,
          payload: error
        })
      )
    )
}

//Used above, utilizing THUNK
export const postGetArtSuccess = (res) => ({
  type: types.POST_GET_ART_SUCCESS,
  payload: res
});

//Used above, utilizing THUNK
export const postGetArtFailure = (err) => ({
  type: types.POST_GET_ART_FAILURE,
  payload: err
});