import * as types from '../constants/actionTypes';

export const loginUsername = (username) => ({
	type: types.LOGIN_USERNAME,
	payload: username
});

export const loginPassword = (password) => ({
	type: types.LOGIN_PASSWORD,
	payload: password
});

export const postUsernameAndPasswordSuccess = (res) => ({
    type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
    payload: res
});

export const postUsernameAndPasswordFailure = (err) => ({
    type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
    payload: err
});

export const verifyLogin = (username, password) => (dispatch) => {
    console.log('LOGIN SENT TO VERIFYLOGIN')
    console.log('THIS IS USERNAME', username)
    console.log('THIS IS PASSWORD', password)
    fetch('/api/testsignin', {
        method: 'post',
        body: JSON.stringify({ un: username, pw: password })
    })
        .then(res => {
            console.log('this is res', res)
            res.json()
        })
    .then(
        response => dispatch(
            postUsernameAndPasswordSuccess({
                type: types.POST_USERNAME_AND_PASSWORD_SUCCESS,
                payload: response
            })
        )
    )
        .catch(
            error => dispatch(
                postUsernameAndPasswordFailure({
                    type: types.POST_USERNAME_AND_PASSWORD_FAILURE,
                    payload: error
            })
        )
    )
}

