
import { combineReducers } from 'redux';

import userReducer from './userReducer';

const reducers = combineReducers({
  userTraffic: userReducer,
});


export default reducers;