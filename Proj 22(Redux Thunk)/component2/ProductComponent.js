import React from 'react'
import {useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function ProductComponent() {
  const products=useSelector(state=>state.allProduct.products)
  
  const renderList=products.map((product)=>{
    const {id,title,image,category,price}=product;
    return(
      <div className='container my-3' key={id}>
        <Link to={`/product/${id}`}  className="texts">
        <div className='card'>
          <img src={image} alt={title} className="card-img-top"/>
          <div className='card-body'>
            <h6>{title}</h6>
            <p>$ {price}</p>
            <p>{category}</p>
          </div>
        </div>
        </Link>
      </div>
    )
  })
  return (
    <div className='grid'>
      {renderList}
    </div>
  )
}

export default ProductComponent
