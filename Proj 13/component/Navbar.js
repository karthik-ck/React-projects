import React from 'react'
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div>
      <header>
        <div className='container container-flex'>
            <div className='logocontainer'>
                <img src="https://th.bing.com/th/id/R.85c08505dae9d30ee323b09f808613ee?rik=DrnETXgm8kj%2fPA&riu=http%3a%2f%2fcontent.invisioncic.com%2fr224567%2fmonthly_2016_11%2f582c950a2af14_liond.jpg.5656173de84122308c7f92de0d311515.jpg&ehk=YAmg9xlJbK%2fKvZ4FV9tsC8%2bRog8YShcckXp5W9hbmPk%3d&risl=&pid=ImgRaw&r=0" alt="logo" className='logo'/>
            </div>
            <nav>
                <div className='list'>
                    <NavLink to="/" className="listItem">Home</NavLink>
                    <NavLink to="/about" className="listItem">About</NavLink>
                    <NavLink to="/service" className="listItem">Services</NavLink>
                    <NavLink to="/Contact" className="listItem">Contact</NavLink>
                    <NavLink to="/policy" className="listItem">Policy</NavLink>
                </div>
            </nav>
            <div className='icons'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icon"/>
                <FontAwesomeIcon icon={faUser} className="icon"/>
                <FontAwesomeIcon icon={faPhone} className="icon"/>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
