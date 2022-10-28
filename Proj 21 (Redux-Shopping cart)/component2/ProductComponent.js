import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products)
    
    const renderList=products.map((product)=>{
        const {id,title,price,category,image}=product
        return(
            <div className='container my-3 ' key={id}>
                <Link to={`/product/${id}`} className="texts">
               <div className="card">
                  <img src={image} className="card-img-top" alt={title}/>
                  <div className="card-body">
                      <h6 className="card-title">{title}</h6> 
                      <div className="card-text">${price}</div>
                      <div className="card-text">{category}</div>
                 </div>
                </div>
                </Link>
            </div>
        )
    })

    return(
        <div className='grid'>
          {renderList}
        </div>
    )
}

export default ProductComponent
