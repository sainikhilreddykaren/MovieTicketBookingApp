import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import LoadingBar from './LoadingBar'


import axios from 'axios';

const NearByEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getEventDetails();
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [])


  const getEventDetails = () => {
    axios.get('http://localhost:4000/nearByEvents')
      .then(response => {
        setEvents(response.data);
        // console.log('response is :', response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }




  return (
    <div>
      {loading ? <LoadingBar /> :
        <>
          <NavBar />
          <div className="nearby-events">
            <h2 className="section-title">Nearby Events</h2>
            <div className="event-cards">
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="event-image"
                  />
                  <div className="event-info">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-location">{event.location}</p>
                    <p className="event-date">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>}
      <footer className="footer">
        <p className="text-center">&copy; Sai Nikhil Reddy Karennagari. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default NearByEvents