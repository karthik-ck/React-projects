import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Home.css'

function Home() {

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-6 texts'>
          <h2>Learning made Easy</h2>
          <p>Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences. The ability to learn is possessed by humans, animals, and some machines; there is also evidence for some kind of learning in certain plants. Some learning is immediate, induced by </p>
          <button className='btn'><NavLink to="/about" className="readMore">Read More</NavLink></button>
        </div>
        <div className='col-6'>
          <img src="https://tscpl.org/wp-content/uploads/2017/04/digilearn.jpg" alt='...' />
        </div>
      </div>
    </div>
  )
}

export default Home
