// ticketBookingActionTypes.js
export const SET_TICKET_BOOKING_DATA = 'SET_TICKET_BOOKING_DATA';
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';

// ticketBookingActions.js
export const setTicketBookingData = (data) => ({
  type: SET_TICKET_BOOKING_DATA,
  payload: data,
});

export const setMovieDetailsData = (data) => ({
  type: SET_MOVIE_DETAILS,
  payload: data,
});
