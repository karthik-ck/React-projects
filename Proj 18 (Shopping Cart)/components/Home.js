import React from 'react'
import { CartState } from './Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';

function Home() {
  const {state:{products},
         productState: { sort, byStock, byFastDelivery, byRating, searchQuery },}=CartState();

  const transformProducts=()=>{
    let sortedProduct=products;

    if(sort){
      sortedProduct=sortedProduct.sort((a,b)=>
        sort==='lowToHigh'?a.price-b.price : b.price-a.price)
    }

    if(!byStock){
      sortedProduct=sortedProduct.filter((product)=>product.inStock)
    }

    if(!byFastDelivery){
      sortedProduct=sortedProduct.filter((product)=>product.fastDelivery)
    }

    if(byRating){
      sortedProduct=sortedProduct.filter((product)=>product.ratings>=byRating)
    }
    
    if(searchQuery){
      sortedProduct=sortedProduct.filter((product)=>product.name.toLowerCase().includes(searchQuery))
    }

    return sortedProduct

  }       

  return (
    <div className='home'>
      <Filters />
       <div className='productContainer'>
        {
            transformProducts().map((product,index)=>{
            return <SingleProduct product={product} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Home
