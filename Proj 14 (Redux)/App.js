import React from 'react'
import Header from './components/Header'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
         <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
