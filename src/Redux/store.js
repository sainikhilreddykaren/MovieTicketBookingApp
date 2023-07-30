// store.js
import { createStore, combineReducers } from 'redux';
import ticketBookingReducer from './reducer';

//created a root reducer
const rootReducer = combineReducers({
  ticketBooking: ticketBookingReducer,
});

// Created the Redux store
const store = createStore(rootReducer);

export default store;
