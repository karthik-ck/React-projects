import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <Link to='/' className='texts'>
        <h2 className='title'>Quiz App</h2>
        </Link>
    </div>
  )
}

export default Header
