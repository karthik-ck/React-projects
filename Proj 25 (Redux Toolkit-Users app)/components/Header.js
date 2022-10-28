import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <Link to='/' className='texts'>
         <div className='title'>Users Book</div>
      </Link>
    </div>
  )
}

export default Header
