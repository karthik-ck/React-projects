import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct, removeSelectedProduct} from '../components/Actions'

function ProductDetails() {
  const product=useSelector(state=>state.product)
  const {title,image,price,description,category}=product;
  const {productId}=useParams()
  const dispatch=useDispatch()

    useEffect(()=>{
      if(productId && productId !== " ") 
         dispatch(fetchProduct(productId))
      return()=>{
        dispatch(removeSelectedProduct())
      }  
    },[])

  const submit=()=>{
    alert('submitted')
  }

  return (
    <div className='containerProduct'>
      <div className='card card1'>
        <div className='row'>
          <div className='col-6'>
              <img className='image' src={image} alt={title}/>
          </div>
          <div className='col-6 productDetails'>
             <h3>{title}</h3>
             <h4>$ {price}</h4>
             <h4>{category}</h4>
             <p>{description}</p>
             <button className='btn btn-success' onClick={()=>submit()}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
