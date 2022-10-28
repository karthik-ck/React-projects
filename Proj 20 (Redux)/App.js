import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Decrement, Increment ,IsLoggedIn} from './component/Actions';

function App() {
  const counter=useSelector((state)=>state.counter);
  const isLogged=useSelector((state)=>state.isLogged);

  let status=''
  if(isLogged===false){
    status='Sign in'
  }
  else{
    status='Sign Out'
  }

  const dispatch=useDispatch()

  return (
    <div className='container my-3'>
       <h2>Counter: {counter} </h2>
       <button className='btn btn-primary' onClick={()=>dispatch(Increment())}>Inc</button>
       <button className='mx-3 btn btn-success' onClick={()=>dispatch(Decrement())}>Dec</button>
       <div>
        <button className='my-2 btn btn-danger' onClick={()=>dispatch(IsLoggedIn())}>{status}</button>
        {isLogged?(
          <h3>Login Successful</h3>
        ):(
          <h3>please sign in to view the content</h3>
        )}
       </div>
    </div>
  )
}

export default App
