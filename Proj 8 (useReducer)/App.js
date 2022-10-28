import React, { useReducer } from 'react'

const initialState=0
const reducer=(state,action)=>{
  switch(action){
    case 'add':
      return state+1
    case 'sub':
      return state-1
    case 'reset':
      return initialState 
    default:
      return initialState      
  }
}

function App() {

  const [count,dispatch]=useReducer(reducer,initialState)

  return (
    <div className='container'>
      <h3>Count:{count}</h3>
      <button className='mx-2' onClick={()=>dispatch('add')}>+</button>
      <button className='mx-2' onClick={()=>dispatch('sub')}>-</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default App
