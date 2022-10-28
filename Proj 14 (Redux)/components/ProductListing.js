import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import ProductComponents from './ProductComponents'
import axios from 'axios'

const ProductListing = () => {
    const products=useSelector((state)=>state)
    console.log(products)
    

    useEffect(()=>{
        async function fetchProducts(){
            const res=await axios.get('https://fakestoreapi.com/products')
            console.log(res.data)
        }
        fetchProducts()
    },[])
  return (
    <div className='ui grid container'>
      <ProductComponents /> 
    </div>
  )
}

export default ProductListing
