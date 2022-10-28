import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './AddUser.css'
import { editUser } from '../Redux/UserSlice'

function EditUser() {
    const params=useParams()
    const users=useSelector(state=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const existingUser=users.filter((user)=> user.id === params.id)
    const {name,email}=existingUser[0]
    const [values,setValues]=useState({
        name,
        email
    })

    const handleEditUser=()=>{
        setValues({name:'',email:''})
        dispatch(editUser({
          id:params.id,
          name:values.name,
          email:values.email
        }))
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
      <button type='submit' className='btn btn-outline-success col-2' onClick={handleEditUser}>Submit</button>
    </div>
  )
}

export default EditUser
