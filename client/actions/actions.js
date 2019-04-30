import * as types from '../constants/actionTypes';
const axios = require('axios');
import thunk from 'redux-thunk';

export const loginUsername = (username) => ({
	type: types.LOGIN_USERNAME,
	payload: username
});

export const loginPassword = (password) => ({
	type: types.LOGIN_PASSWORD,
	payload: password
});

// export const postUsernameAndPasswordSuccess = (res) => ({
//     type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
//     payload: res
// });

// export const postUsernameAndPasswordFailure = (err) => ({
//     type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
//     payload: err
// });

export const verifyLogin = (username, password) => (dispatch) => {
    console.log('LOGIN SENT TO VERIFYLOGIN')
    console.log('THIS IS USERNAME', username)
    console.log('THIS IS PASSWORD', password)
    axios({
        method: 'post',
        url: '/api/testsignin',
        data: { 'username': username, 'password': password },
    })
    .then(response => {
        console.log('this is res', response.data)
        // return res.json()
        return dispatch(
            postUsernameAndPasswordSuccess({
                type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
                payload: response.data
            })
        )
    })
    // .then(response => {
    //     console.log('this is .then res', response);
    // })
    .catch(
        error => dispatch(
            postUsernameAndPasswordFailure({
                type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
                payload: error
        })
      )
    )
}

export const postUsernameAndPasswordSuccess = (res) => ({
    type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
    payload: res
});

export const postUsernameAndPasswordFailure = (err) => ({
    type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
    payload: err
});

export const signup = () => ({
    type: types.SIGNUP,
    payload: true
});

export const createuser = (username, password) => (dispatch) => {
    console.log('in createuser function about to post request')
    axios({
        method: 'post',
        url: '/api/testauth',
        data: { 'username': username, 'password': password },
    })
    .then(response => {
        return dispatch(
            postCreateUserSuccess({
                type: types.POST_CREATE_USER_SUCCESS,
                payload: response.data
            })
        )
    })
    .catch(
        error => dispatch(
            postCreateUserFailure({
                type: types.POST_CREATE_USER_FAILURE,
                payload: error
        })
      )
    )
}
export const postCreateUserSuccess = (res) => ({
    type: types.POST_CREATE_USER_SUCCESS,
    payload: res
});

export const postCreateUserFailure = (err) => ({
    type: types.POST_CREATE_USER_FAILURE,
    payload: err
});

///////////////////////////////////////
export const getArt = () => (dispatch) => {
    console.log('in getArt function about to get request')
    axios({
        method: 'get',
        url: '/api/getallart'
    })
    .then(response => {
        return dispatch(
            postGetArtSuccess({
                type: types.POST_GET_ART_SUCCESS,
                payload: response.data
            })
        )
    })
    .catch(
        error => dispatch(
            postGetArtFailure({
                type: types.POST_GET_ART_FAILURE,
                payload: error
        })
      )
    )
}

export const postGetArtSuccess = (res) => ({
    type: types.POST_GET_ART_SUCCESS,
    payload: res
});

export const postGetArtFailure = (err) => ({
    type: types.POST_GET_ART_FAILURE,
    payload: err
});