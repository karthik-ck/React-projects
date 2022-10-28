import React, { useState } from 'react'
import './App.css'

function App() {

   const [userReg,setUserReg]=useState({
    fullname:'',
    email:'',
    password:'',
    phone:''
   })

   const handleChange=(e)=>{
     const name=e.target.name
     const value=e.target.value

     setUserReg({...userReg,[name]:value})
   }

   const formSubmit=(e)=>{
    e.preventDefault();

    const newRecord={...userReg}
    console.log(newRecord)
   }

  return (
    <div className='container'>
      <form onSubmit={formSubmit} className="forms">
      <h2>Registration Form</h2>
        <div className='formData'>
          <label>Full Name</label>
          <input type="text" name="fullname" value={userReg.fullname} onChange={handleChange} />
        </div>
        <div className='formData'>
          <label>Email</label>
          <input type="email" name="email" value={userReg.email} onChange={handleChange}/>
        </div>
        <div className='formData'>
          <label>Password</label>
          <input type="password" name="password" value={userReg.password} onChange={handleChange}/>
        </div>
        <div className='formData'>
          <label>Phone</label>
          <input type="number" name="phone" value={userReg.phone} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
