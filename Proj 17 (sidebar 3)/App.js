import React from 'react'
import './App.css'
import Maindash from './components/Maindash'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar />
        <Maindash />
      </div>
    </div>
  )
}

export default App
