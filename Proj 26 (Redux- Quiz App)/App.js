import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Quetions from './components/Quetions'
import Results from './components/Results'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
         <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/questions' element={<Quetions />} />
            <Route path='/result' element={<Results />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
