import React, { useEffect } from 'react'
import MovieListing from './MovieListing'
import {useDispatch} from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../Redux/MovieSlice'

const Home = () => {

  const dispatch=useDispatch()

  const movieText="Vikram"
  const shpwText="Game"

  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(shpwText))
  })

  return (
    <div>
       <div className='banner-img'></div>
       <MovieListing />
    </div>
  )
}

export default Home
