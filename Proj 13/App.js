import React from 'react'
import './css/Navbar.css'
import './css/Footer.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Policy from './component/Policy';
import Error from './component/Error';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service  />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route element={<Error />} />
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
