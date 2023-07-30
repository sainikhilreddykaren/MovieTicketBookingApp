import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoadingBar from './LoadingBar';


const UpCommingMovies = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const { moviesData } = useSelector(
    (state) => state.ticketBooking
  );

  useEffect(() => {
    setMovies(moviesData[0])
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [])


  return (
    <div>
      {loading ? <LoadingBar /> :
        <>
          <NavBar />
          <div className="upcoming-movies-container">
            <h2 className="upcoming-movies-title text-center" >Upcoming Movies</h2>
            <div className="upcoming-movies-grid">
              {movies.filter((item) => item.movieType === 'upcomming').map(movie => (
                <div className="upcoming-movie-card" key={movie.id}>
                  <img src={movie.imageUrl} alt={movie.title} className="upcoming-movie-image" />
                  <div className="upcoming-movie-details">
                    <h3 className="upcoming-movie-title text-center">{movie.title}</h3>
                    <p className="upcoming-movie-description">{movie.description}</p>
                    {/* <button className="upcoming-movie-book-button">Book</button> */}
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
  );
}

export default UpCommingMovies