import { combineReducers } from 'redux';

import { allRoomsReducer, roomDetailsReducer } from './roomReducers';
import {
  authReducer,
  forgotPasswordReducer,
  loadedUserReducer,
  userReducer,
} from './userReducers';

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  loadedUser: loadedUserReducer,
  forgotPassword: forgotPasswordReducer,
});

export default reducers;
