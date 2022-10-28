import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts } from '../components/Actions'
import ProductComponent from './ProductComponent'

function ProductListing() {
  const products=useSelector(state=>state)
  console.log(products)
  const disaptch=useDispatch()

  useEffect(()=>{
    disaptch(fetchProducts())
  })

  return (
    <div>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
