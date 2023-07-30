import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import LoadingBar from './LoadingBar'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'





const LatestMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <div className="latest-movies-container">
            <h2 className="latest-movies-title text-center">Latest Movies</h2>
            <div className="latest-movies-cards">
              {movies.filter((item) => item.movieType === 'latest').map((movie) => (
                <div key={movie.id} className="latest-movie-card">
                  <img src={movie.imageUrl} alt={movie.title} className="latest-movie-image"
                    onClick={() => navigate(`/movieDetails/${movie.title}`)} />
                  <div className="latest-movie-info">
                    <h3 className="latest-movie-title">{movie.title}</h3>
                    <h3 className="latest-movie-title-genre">Genre : {movie.genre}</h3>
                    <p className="latest-movie-description">{movie.description}</p>
                    <button className="latest-movie-book-button"
                      onClick={() => navigate(`/ticketBooking/${movie.title}`)}>Book</button>
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
};

export default LatestMovies