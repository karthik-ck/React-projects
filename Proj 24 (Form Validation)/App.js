import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const initialValues={username:'',email:'',password:''}
  const [formValues,setFormValues]=useState(initialValues)
  const [formError,setFormError]=useState({})
  const [isSubmit,setIsSubmit]=useState(false)

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormValues({...formValues,[name]:value})
  }

  const formSubmit=(e)=>{
    e.preventDefault()
    setFormError( validate(formValues))
    setIsSubmit(true) 
  }

  useEffect(()=>{
    console.log(formError)
    if(Object.keys(formError).length===0 && isSubmit){
      console.log(formValues)
    }
  })
  const validate=(values)=>{
     const errors={}
     if(!values.username){
      errors.username="Username is required"
     }
     if(!values.email){
      errors.email="Email is required"
     }
     if(!values.password){
      errors.password="Password is required"
     }
     else if(values.password.length < 4){
      errors.password="Password must be more that 4 characters"
     }
     return errors
  }
  return (
    <div>
      {(Object.keys(formError).length===0 && isSubmit)?(
        <div className='success'>Sign in Successfull...</div>
      ):(
        <></>
      )}
    <div className='container'>
      <form onSubmit={formSubmit}>
        <h1>Login Form</h1>
        <hr />
        <div className='field'>
          <label>Username</label>
          <input type='text' name='username' placeholder='Username' value={formValues.username} onChange={handleChange}/>
          <p>{formError.username}</p>
        </div>
        <div className='field'>
          <label>Email</label>
          <input type='email' name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
          <p>{formError.email}</p>
        </div>
        <div className='field'>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
          <p>{formError.password}</p>
        </div>
        <button type="submit" className='btn btn-outline-primary'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default App
