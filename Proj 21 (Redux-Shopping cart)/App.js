import React from 'react'
import Header from './component2/Header'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductListing from './component2/ProductListing'
import ProductDetails from './component2/ProductDetails'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing/>} />
        <Route path='/product/:productId' element={<ProductDetails/>} />
        <Route>404 Not Found</Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
