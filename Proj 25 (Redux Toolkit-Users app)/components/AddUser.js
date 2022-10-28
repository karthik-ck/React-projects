import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addUser } from '../Redux/UserSlice'
import { v4 as uuidv4 } from 'uuid';
import './AddUser.css'

function AddUser() {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [values,setValues]=useState({
        name:'',
        email:''
    })

    const handleAddUser=()=>{
        setValues({name:'',email:''});
        dispatch(addUser({
          id:uuidv4(),
          name:values.name,
          email:values.email
        }));
        navigate('/')
    }
  return (
    <div className='AddUser'>
      <div className='text'>CRUD with redux toolkit</div>
      <div className='inputs'>
        <label>Name</label>
        <input type='text' placeholder='Karthik' value={values.name} 
        onChange={(e)=>setValues({...values,name:e.target.value})} />
      </div>
      <div className='inputs'>
        <label>Email</label>
        <input type='email' placeholder='Karthik@gmail.com' value={values.email} 
        onChange={(e)=>setValues({...values,email:e.target.value})}/>
      </div>
      <button type='submit' className='btn btn-outline-success col-2' onClick={handleAddUser}>Submit</button>
    </div>
  )
}

export default AddUser
