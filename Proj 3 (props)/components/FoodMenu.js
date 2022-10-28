import React, { Component } from 'react'
import FoodCart from './FoodCart'

class FoodMenu extends Component {

  constructor(){
    super()

    this.state={
        qty:0
    }
  }

  increase(){
    this.setState({
        qty:this.state.qty+1
    })
  }

  decrease(){
    this.setState({
        qty:this.state.qty-1
    })
  }

  handleCartChange(qty){
    this.setState({
      qty:qty
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='display-5 text-center my-3'>Food Menu</div>

        <div className='d-flex justify-content-center align-item-center'>
          <button className='btn  btn-primary' onClick={()=>this.decrease()}>-</button>
          <spam className="mx-3 lead">{this.state.qty}</spam>
          <button className='btn btn-primary' onClick={()=>this.increase()}>+</button>
        </div>

        <FoodCart qty={this.state.qty} handleCartChange={(qty)=>this.handleCartChange(qty)}/>
      </div>
    )
  }
}

export default FoodMenu
