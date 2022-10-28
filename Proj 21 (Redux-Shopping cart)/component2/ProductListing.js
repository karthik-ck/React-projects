import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../components/Actions'

const ProductListing = () => {
    const products=useSelector(state=>state)
    //console.log(products)
    const dispatch=useDispatch()
    
   useEffect(()=>{
      async function fetchproducts(){
        const response=await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("ERROR",err)
          })
        dispatch(setProducts(response.data))
      }
      fetchproducts()
   })

  return (
    <div>
       <ProductComponent />
    </div>
  )
}

export default ProductListing
