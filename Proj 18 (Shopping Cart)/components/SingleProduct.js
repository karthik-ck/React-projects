import React from 'react'
import { CartState } from './Context'
import Ratings from './Ratings'

const SingleProduct = ({product}) => {

   const {state:{cart},dispatch}=CartState();

  return (
    <div className='card products'>
      <img className='product-image' src={product.image} alt={product.name} />
      <div className='card-body'>
        <div className='card-title'>{product.name}</div>
        <div className='sub-title'>
            <span>
                ${product.price.split(".")[0]}
            </span>
            {product.fastDelivery?(
                <div>Fast Delivery</div>
            ):(
                <div>4 days Delivery</div>
            )}
            <Ratings rating={product.ratings} />
        </div>
        {
          cart.some((p)=>p.id===product.id)?(
            <button onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              })
            }
            className='btn btn-danger'>Remove From Cart</button>
          ):(
            <button onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
            disabled={!product.inStock} className="mx-1 btn btn-primary">
            {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
          )
        }
      </div>
    </div>
  )
}

export default SingleProduct
