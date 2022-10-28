import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../Redux/MovieSlice'
import './Header.css'

const Header = () => {
  const [term,setTerm]=useState('')
  const dispatch=useDispatch()

  const submitHandler=(e)=>{
     e.preventDefault();
     dispatch(fetchAsyncMovies(term));
     dispatch(fetchAsyncShows(term));
     setTerm('')
     if(term==="")
       return alert('please search any movies or shows')
  }

  return (
    <div className='header'>
      <Link to='/' className='texts'>
      <div className='logo'>Movie App</div>
      </Link>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder="Search Movies or Shows" onChange={(e)=>setTerm(e.target.value)} />
          <button type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className='user'>
        <img src="https://www.maxpixel.net/static/photo/640/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png" alt='user' />
      </div>
    </div>
  )
}

export default Header
