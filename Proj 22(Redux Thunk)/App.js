import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './component2/Header'
import ProductDetails from './component2/ProductDetails'
import ProductListing from './component2/ProductListing'

function App() {
  return (
    <div>
      <BrowserRouter>
         <Header />
         <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
