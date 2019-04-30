import * as types from '../constants/actionTypes';

const initialState = {
  username: null,
  password: null,
  verified: null,
  error: null,
  needsToSignup: false,
  userCreated: false,
  artRecieved: false,
  art: null,
};

const userReducer = (state = initialState, action) => {
  let newVerified;
  let newError;
  let newUsername;
  let newPassword;
  let newNeedsToSignup;
  let newUserCreated;
  let newArtRecieved;
  let newArt;

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
      console.log('in post sign in reduce')
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
      
    case types.SIGNUP:
      newNeedsToSignup = action.payload;
      return {
        ...state,
        needsToSignup: newNeedsToSignup,
      };

    case types.POST_CREATE_USER_SUCCESS:
      newUserCreated = true;
      return {
        ...state,
        userCreated: newUserCreated,
      };

    case types.POST_CREATE_USER_FAILURE:
      return {
        ...state,
      };

    case types.POST_GET_ART_SUCCESS:
      newArtRecieved = true;
      newArt = action.payload.payload;
      console.log('this is newArt ', newArt)

      const newArtParsed = newArt.map(el => {
        return (
        <div className="artUnit">
        <img src={el.image} style={{height: 100 }}></img>
        <p className="unitTitle">{el.title}</p>
        <p>Artist: {el.artist}</p>
        <p>Description: {el.description}</p>
        <p>Material: {el.material}</p>
        <p>Price: {el.price}</p>
        </div>
        )
      })

      return {
        ...state,
        artRecieved: newArtRecieved,
        art: newArtParsed,
      };
      
    case types.POST_GET_ART_FAILURE:
      return {
        ...state,
      };

      default:
        return state;
  }
}

export default userReducer;