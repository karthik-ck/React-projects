import React from 'react'

function Footer() {
  return (
    <footer>
    <div className='container container-flex'>
        <div className='fooIcons'>
            <p className='fooIcon'>Facebook</p>
            <p className='fooIcon'>Instgram</p>
            <p className='fooIcon'>Twitter</p>
        </div>
        <div className='line'>
            <hr></hr>
            <hr></hr>
        </div>
        <div className='copyright'> 
            <p>All rights reserved &copy</p>
            <p>Made with karthik ck</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer
