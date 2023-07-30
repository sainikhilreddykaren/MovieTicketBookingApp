import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';




const ImageSlider = () => {
    const [movieDetails, setMovieDetails] = useState([]);

    const { moviesData } = useSelector(
        (state) => state.ticketBooking
    );


    useEffect(() => {
        // console.log(moviesData)
        setMovieDetails(moviesData[0]);
    }, [])


    return (
        <div className="">
            <div className="carousel-container">
                <Carousel interval={1000}>
                    {movieDetails.map((movie) => (
                        <Carousel.Item key={movie.id}>
                            <img
                            style={{height: "500px", objectFit:'cover'}}
                                className="d-block w-100"
                                src={movie.imageUrl}
                                alt="movie.title"
                            />
                        </Carousel.Item>))}
                </Carousel>
            </div>
        </div>

    );
};

export default ImageSlider;
