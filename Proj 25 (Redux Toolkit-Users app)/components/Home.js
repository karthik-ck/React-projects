import React from 'react'
import './Home.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser } from '../Redux/UserSlice';

function Home() {
  
  const dispatch=useDispatch()
  const users=useSelector(state=>state.users)
  console.log(users)

  const handleDeleteUser=(id)=>{
     dispatch(deleteUser({id:id}))
  }

  const renderCard=()=>users.map((user,id)=>(
    <div className='user' key={id}>
      <div>
          <h3>{user.name}</h3>
          <span>{user.email}</span>
      </div>
      <div className='icon'>
        <Link to={`/edit-user/${id}`} className='icon-color'><EditIcon /></Link>
        <DeleteIcon onClick={()=>handleDeleteUser(user.id)}/>
      </div>
    </div>
  ))
  return (
    <div>
       <div className='text'>CRUD with redux toolkit</div>
       <Link to='/add-user'><button className='button' type='sumit' >Add User</button></Link>
       <div className='home'>
          {users.length ? renderCard() : <p className='no-user'>No user</p>}
       </div>
       </div>
  )
}

export default Home
