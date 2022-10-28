import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [title,setTitle]=useState([])
  const [image,setImage]=useState([])
  const [description,setDesc]=useState([])

 /*useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${8}`)
    .then((res)=>setTitle(res.data.title))
    .catch(err=>console.log(err))
  })*/

  useEffect(()=>{
     async function getData(){
      const res=await axios.get(`https://fakestoreapi.com/products/${16}`)
      setTitle(res.data.title)
      setImage(res.data.image)
      setDesc(res.data.description)
     }
     getData()
  })
  return (
    <div className='App'>
      <h3>{title}</h3>
      <img src={image} alt=".." />
      <p>{description}</p>
    </div>
  )
}

export default App
