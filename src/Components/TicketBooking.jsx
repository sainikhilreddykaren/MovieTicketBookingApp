import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate, useParams } from 'react-router-dom';

import { setTicketBookingData } from '../Redux/actions';
import LoadingBar from './LoadingBar'

const TicketBooking = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title } = useParams();
  const [selectedDate, setSelectedDate] = useState(null);
  const availableShowTimes = ['10:00 AM', '2:00 PM', '6:00 PM'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  const [bookingObj, setBookingObj] = useState({
    movieName: title,
    date: '',
    seats: 0,
    time: ''
  })


  const handleSelectedDate = (date) => {
    setSelectedDate(date)
    // console.log(date.toLocaleDateString())
    setBookingObj({ ...bookingObj, date: date.toLocaleDateString() })
  }

  const handleFinalBooking = () => {
    dispatch(setTicketBookingData(bookingObj));
    // setTransactiondetails()
    navigate("/finalBooking");
  }
  return (
    <div>
      {loading ? <LoadingBar /> :
        <>
          <NavBar />
          <div className="ticket-booking-page">
            <div className="booking-section">
              <h2 className="section-title">Ticket Booking</h2>
              <div className="booking-details">
                <div className="booking-info">
                  <div className="booking-info-item">
                    <div className="booking-info-label">Movie Name :</div>
                    <div className="booking-info-value">{title}</div>
                  </div>
                  <div className="booking-info-item">
                    <div className="booking-info-label">Date:</div>
                    <div className="booking-info-value">
                      <DatePicker
                        selected={selectedDate}
                        onChange={date => handleSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a date"
                        minDate={new Date()}
                      />
                    </div>
                  </div>
                  <div className="booking-info-item">
                    <div className="booking-info-label">Available Show Times :</div>
                    <div className="booking-info-value">{availableShowTimes.map((showTime, index) => (
                      <label key={index} className='showtimes'>
                        <input type="radio" name="showTime" value={showTime} onChange={(e) => setBookingObj({ ...bookingObj, time: e.target.value })} />
                        {showTime}
                      </label>
                    ))}</div>
                  </div>
                  <div className="booking-info-item">
                    <div className="booking-info-label">Choose number of seats:</div>
                    <div className="booking-info-value">
                      <input type="number" min="1" max="100" onChange={(e) => setBookingObj({ ...bookingObj, seats: e.target.value })} />
                    </div>
                  </div>
                </div>
                <button className="book-button `${(bookingObj.seats < 1 || bookingObj.date === '' || bookingObj.time === '') ? button-disabled : ''}`" onClick={() => { handleFinalBooking() }}
                  disabled={bookingObj.seats < 1 || bookingObj.date === '' || bookingObj.time === ''}>Book Now</button>
              </div>
            </div>
          </div>
        </>}
      <footer className="footer">
        <p className="text-center">&copy; Sai Nikhil Reddy Karennagari. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default TicketBooking