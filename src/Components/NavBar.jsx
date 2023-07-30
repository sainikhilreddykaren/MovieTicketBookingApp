import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {


  const [searchParams, setSearchParams] = useState();
  const navigate = useNavigate();


  const handleSearchMovie = () =>{
    navigate(`/movieDetails/${searchParams}`);
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand custom-brand" to="/">E - Cube</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/latestMovies">Latest Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nearByEvents">Nearby Events</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactions">Transaction History</Link>
          </li>
        </ul>
      </div>
      <form className="form-inline my-2 my-lg-0">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => setSearchParams(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-light" type="button"
            onClick={()=>handleSearchMovie()}>
              Search
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
};

export default NavBar;
