import { combineReducers } from 'redux';
import {
  bookedDatesReducer,
  bookingDetailsReducer,
  bookingsReducer,
  checkBookingReducer,
} from './bookingReducers';

import {
  allRoomsReducer,
  newReviewReducer,
  roomDetailsReducer,
} from './roomReducers';
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
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  bookingDetails: bookingDetailsReducer,
  newReview: newReviewReducer,
});

export default reducers;
