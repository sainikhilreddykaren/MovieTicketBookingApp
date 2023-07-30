import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import LatestMovies from './Components/LatestMovies'
import MovieDetails from './Components/MovieDetails'
import TicketBooking from './Components/TicketBooking'
import FinalBooking from './Components/FinalBooking'
import NearByEvents from './Components/NearByEvents'
import UpCommingMovies from './Components/UpCommingMovies'
import TransactionHistory from './Components/TransactionHistory'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/latestMovies" element={<LatestMovies/>}/>
        <Route path="/movieDetails/:title" element={<MovieDetails/>}/>
        <Route path="/ticketBooking/:title" element={<TicketBooking/>}/>
        <Route path="/finalBooking" element={<FinalBooking/>}/>
        <Route path="/nearByEvents" element={<NearByEvents/>}/>
        <Route path="/upComming" element={<UpCommingMovies/>}/>
        <Route path="/transactions" element={<TransactionHistory/>}/>
      </Routes>
    </div>
  )
}

export default App