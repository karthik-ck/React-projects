import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProduct, selectedProduct } from '../components/Actions'

const ProductDetails = () => {
  const product=useSelector(state=>state.product)
  const {title,image,price,description,category}=product;
  const {productId}=useParams()
  const dispatch=useDispatch()

  async function fetchProductDetails(){
      const response =await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err=>{
        console.log('Error',err)
      })
      dispatch(selectedProduct(response.data))
    }

    useEffect(()=>{
      if(productId && productId !== " ") 
         fetchProductDetails();
      return ()=>{
        dispatch(removeSelectedProduct())
      }   
    },[productId])

    const submit=()=>{
      alert('item added to the cart')
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
