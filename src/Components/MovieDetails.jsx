import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import LoadingBar from './LoadingBar'

import NavBar from './NavBar'


const MovieDetails = () => {

  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const { moviesData } = useSelector(
    (state) => state.ticketBooking
  );

  useEffect(() => {
    setMovie(moviesData[0])
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  // const getLatestMovieDetails = () => {
  //   axios.get('http://3.17.216.66:4000/latest')
  //     .then(response => {
  //       setMovie(response.data);
  //       // setLoading(false);
  //       console.log('response is :', response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });

  // }



  const { title } = useParams();

  return (
    <div>
      {loading ? <LoadingBar /> :
        <>
          <NavBar />
          {
            movie.filter((item) => item.title === title)
              .map((data) => {
                return (
                  <div className="movie-details" key={data.id}>
                    <div className="movie-image-container">
                      <img src={data.imageUrl} alt={data.title} className="movie-image" />
                    </div>
                    <div className="movie-info-container">
                      <div className="movie-info-row">
                        <div className="movie-info-label">Movie Name:</div>
                        <div className="movie-info-value">{data.title}</div>
                        <div className="movie-info-label">Release Date:</div>
                        <div className="movie-info-value">{data.releaseDate}</div>
                      </div>
                      <div className="movie-info-row">
                        <div className="movie-info-label">Movie Genre :</div>
                        <div className="movie-info-value">{data.genre}</div>
                        <div className="movie-info-label">Duration :</div>
                        <div className="movie-info-value">{data.duration}</div>
                      </div>
                      <div className="movie-info-row">
                        <div className="movie-info-label">Ratings:</div>
                        <div className="movie-info-value">{data.ratings}</div>
                      </div>
                    </div>
                    <div className="book-now-container">
                      <button className="book-now-button"
                        onClick={() => navigate(`/ticketBooking/${data.title}`)}>Book Now</button>
                    </div>
                  </div>)
              })
          }



          {movie.filter((item) => item.title === title).length <= 0 ? <> <div className="no-movies-found">
            <div className="card">
              <h2 className="message">No Movies Found For Current Search .... !</h2>
            </div>
          </div></> : ''}



        </>}
      <footer className="footer">
        <p className="text-center">&copy; Sai Nikhil Reddy Karennagari. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default MovieDetails