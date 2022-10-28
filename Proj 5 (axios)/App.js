import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Posts from './components/Posts';
import Todos from './components/Todos';
import Albums from './components/Albums';

import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
           <Navbar />
           <Routes>
              <Route path='/user' element={<Users/>} />
              <Route path="/post" element={<Posts />} />
              <Route path="/todo" element={<Todos />} />
              <Route path="/album" element={<Albums/>} />
           </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
