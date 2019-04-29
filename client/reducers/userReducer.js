import * as types from '../constants/actionTypes';

const initialState = {
  username: null,
  password: null,
  verified: null,
  error: null
  
};

const userReducer = (state = initialState, action) => {
  let newVerified;
  let newError;
  let newUsername;
  let newPassword;

  switch(action.type) {
    case types.LOGIN_USERNAME:
      newUsername = action.payload.value;
      return {
        ...state,
        username: newUsername,
      };

    case types.LOGIN_PASSWORD:
      newPassword = action.payload.value;
      return {
          ...state,
          password: newPassword,
      };

    case types.POST_USERNAME_AND_PASSWORD_SUCCESS:
      newVerified = true;
      return {
        ...state,
        verified: newVerified,
        // May need to reset certain areas of state (error, etc.)
        // error: null
      };
    case types.POST_USERNAME_AND_PASSWORD_FAILURE:
      // console.log('IN FAILUREREDUC', action.payload)
      // console.log('IN FAILURE error', action.payload.payload.response.data.error)
      newVerified = false;
      //coordinate with backend re err sent back from server//
      newError = action.payload.payload.response.data.error;
      return {
        ...state,
        verified: newVerified,
        error: newError,
      };

      default:
        return state;
  }
}

export default userReducer;