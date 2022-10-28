import React, { useEffect, useState } from 'react'

function App() {
  const [count,setCount]=useState(0)
  const [calculation,setCalcultion]=useState(0)

  useEffect(()=>{
    setCalcultion(()=>count*2)
  },[count])

  
  return (
    <div className='container my-3'>
      <h3>Count:{count}</h3>
      <button onClick={()=>setCount((c)=>c+1)}> +</button>
      <h3>Calculation: {calculation}</h3>
    </div>
  )
}

export default App
