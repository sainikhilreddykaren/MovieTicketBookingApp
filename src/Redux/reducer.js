// ticketBookingReducer.js
import { SET_TICKET_BOOKING_DATA, SET_MOVIE_DETAILS } from "./actions";


const initialState = {
  movieName: '',
  date: '',
  seats: '',
  time: '',
  moviesData:[]
};





const ticketBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET_BOOKING_DATA:
      return {
        ...state,
        movieName: action.payload.movieName,
        date: action.payload.date,
        seats: action.payload.seats,
        time: action.payload.time,
      };
      case SET_MOVIE_DETAILS:
      return {
        ...state,
        moviesData:[action.payload]
      };
    default:
      return state;
  }
};

export default ticketBookingReducer;
