import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import LoadingBar from './LoadingBar';
import axios from 'axios'

const FinalBooking = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [])



  useEffect(() => {
    setTransactionDetails();
  }, [])



  const bookingId = Math.floor(Math.random() * 1000000);
  const { movieName, date, seats, time } = useSelector(
    (state) => state.ticketBooking
  );


  const setTransactionDetails = () => {
    const response = axios.post("http://localhost:4000/transactions", { movieName, date, seats, time, bookingId });
    // console.log(response);
  }

  return (
    <div>
      {loading ? <LoadingBar /> :
        <>
          <NavBar />
          <div className="blinking-text-container">
            <h2 className="blinking-text">Thank You for Booking!</h2>
          </div>
          <div className="qrcode-display">
            <div className="movie-info">
              <h2 style={{ fontSize: '3rem' }}>Movie Booked:</h2>
              <p>Movie Name: {movieName}</p>
              <p>Selected Seats: {seats}</p>
              <p>Booking Date : {date}</p>
              <p>Movie Timings: {time}</p>
            </div>
            <div className="qrcode-container">
              <h2>QR Code</h2>
              <QRCode value={`Booking ID: ${bookingId}`} size={200} />
            </div>
          </div>
        </>}
      <footer className="footer">
        <p className="text-center">&copy; Sai Nikhil Reddy Karennagari. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default FinalBooking