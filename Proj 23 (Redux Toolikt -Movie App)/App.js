import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import MovieDetails from './Components/MovieDetails'
import PageNotFound from './Components/PageNotFound'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <div className='container'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
