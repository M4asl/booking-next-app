import { combineReducers } from 'redux';
import {
  bookedDatesReducer,
  bookingDetailsReducer,
  bookingReducer,
  bookingsReducer,
  checkBookingReducer,
} from './bookingReducers';

import {
  allRoomsReducer,
  checkReviewReducer,
  newReviewReducer,
  newRoomReducer,
  reviewReducer,
  roomDetailsReducer,
  roomReducer,
  roomReviewsReducer,
} from './roomReducers';
import {
  allUsersReducer,
  authReducer,
  forgotPasswordReducer,
  loadedUserReducer,
  userDetailsReducer,
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
  checkReview: checkReviewReducer,
  newRoom: newRoomReducer,
  room: roomReducer,
  booking: bookingReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  roomReviews: roomReviewsReducer,
  review: reviewReducer,
});

export default reducers;
