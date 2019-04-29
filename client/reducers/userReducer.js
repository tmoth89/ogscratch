import * as types from '../constants/actionTypes';

const initialState = {
  username: null,
  password: null,
  verified: true,
  error: null
  
};

const userReducer = (state = initialState, action) => {
  let verified;
  let error;
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
      //coordinate with backend re res.locals//
      verified = action.payload.res
      return {
        ...state,
        verified,
        // May need to reset certain areas of state (error, etc.)
        // error: null
      };
    case types.POST_USERNAME_AND_PASSWORD_FAILURE:
      verified = false;
      //coordinate with backend re err sent back from server//
      error = action.payload.err;
      return {
        ...state,
        verified,
        error,
      };

      default:
        return state;
  }
}

export default userReducer;