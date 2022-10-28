import React, { useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [post,setPost]=useState({})
  const [id,setId]=useState(1)
  const [idBtn,setIdBtn]=useState(1)

  useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
     .then(res=>{
      setPost(res.data)
     })
     .catch(err=>
      console.log(err))
  },[idBtn])

  const handleClick=()=>{
    setIdBtn(id)
  }

  return (
    <div className='container my-3'>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      <button onClick={handleClick} >Fetch Data</button>
      <div>{post.title}</div>
      { /*<ul>
        {
          posts.map((post)=>
          <li key={post.id}>{post.title}</li>)
        }
      </ul> 
      */}
    </div>
  )
}

export default App
