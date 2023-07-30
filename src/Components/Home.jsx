import React from 'react'
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMovieDetailsData } from '../Redux/actions';

import LoadingBar from './LoadingBar';


const Home = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();

    // // Simulating delay for loading purposes
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 500);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);



    useEffect(() => {

        getMovieDetails();
    }, [])


    // api call to tget the moviedetails and dispatch to the reducer
    const getMovieDetails = () => {
        axios.get('http://localhost:4000/movieDetails')
            .then(response => {
                setMovies(response.data);
                dispatch(setMovieDetailsData(response.data));
                setLoading(false);
                // console.log('response is :', response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }

    const handleTitleClick = (route) => {
        navigate(route);
    };

    return (
        <div>
            {loading ?
                <LoadingBar /> :
                <>
                    <NavBar />
                    <div className="title-container">
                        <div className="row">
                            <div className="col">
                                <h1 className="below-navbar-title" onClick={() => handleTitleClick('/latestMovies')}>Latest Movies</h1>
                            </div>
                            <div className="col">
                                <h1 className="below-navbar-title" onClick={() => handleTitleClick('/upComming')}>Upcoming Movies</h1>
                            </div>
                            <div className="col">
                                <h1 className="below-navbar-title" onClick={() => handleTitleClick('/nearByEvents')}>Nearby Events</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ImageSlider /> 
                    </div>
                    <div>
                        <div className="container">
                            <h2 className="section-title text-center m-5">Recommended Movies</h2>
                            <div className="home-container">
                                {movies.filter((item) => item.movieType === 'recommendations').map((movie) => (
                                    <div key={movie.id} className="home-card">
                                        <img src={movie.imageUrl} alt={movie.title} className="home-movie-image"
                                            onClick={() => navigate(`/movieDetails/${movie.title}`)} />
                                        <div className="home-movie-info">
                                            <h3 className="home-movie-title">{movie.title}</h3>
                                            <button className="book-button"
                                                onClick={() => navigate(`/ticketBooking/${movie.title}`)}>Book</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div></>}
            <footer className="footer">
                <p className="text-center">&copy; Sai Nikhil Reddy Karennagari. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Home;