import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [input,setInput]=useState('')
  const prevInput=useRef('')

  useEffect(()=>{
    prevInput.current=input
  },[input])
  return (
    <div className='container my-3'>
      <input type="text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <h2>Current Value:{input}</h2>
      <h2>Previous Value : {prevInput.current}</h2>
    </div>
  )
}

export default App
