import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
