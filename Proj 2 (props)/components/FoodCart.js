import React, { Component } from 'react'

class FoodCart extends Component {
  render() {
    return (
      <div className='container'>
         <div className='display-5 text-center my-3'>Food Cart</div>

         <p className='m-3 lead text-center'>Qty:{this.props.qty}</p>
      </div>
    )
  }
}

export default FoodCart
