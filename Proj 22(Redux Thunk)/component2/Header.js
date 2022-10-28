import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/' className='text'>
      <h3 className='headerText'>Shopping Cart</h3>
      </Link>
    </div>
  )
}

export default Header
