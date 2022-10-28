import React, { Component } from 'react'

class FoodCart extends Component {

  increase(){
    var qty=this.props.qty +1;
    this.props.handleCartChange(qty)
  }

  decrease(){
    var qty=this.props.qty -1;
    this.props.handleCartChange(qty)
  }

  render() {
    return (
      <div className='container'>
         <div className='display-5 text-center my-3'>Food Cart</div>

         <div className='d-flex justify-content-center align-item-center'>
            <button className='btn btn-success' onClick={()=>this.decrease()}>-</button>
            <spam className='mx-3 lead'>{this.props.qty}</spam>
            <button className='btn btn-success' onClick={()=>this.increase()}>+</button>
         </div>
      </div>
    )
  }
}

export default FoodCart
