import React from 'react'
import './App.css'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" active element={<Home />}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
