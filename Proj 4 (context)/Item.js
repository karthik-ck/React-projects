import React, { Component } from 'react'
import { MyContext } from './App'

class Item extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
            {
               (context)=>(
                <React.Fragment>
                    <div className='container my-3 display-5 text-center'>Item Details</div>
                    <div className='text-center'>
                       <p className='lead'>Item Name:{context.state.name}</p> 
                       <p className='lead'>Item Price:{context.state.price}</p>
                       <p className='lead'>
                        <button className='btn btn-primary' onClick={()=>context.changeQty(context.state.qty-1)}>-</button>
                        <spam className='mx-3'>Item Qty:{context.state.qty}</spam>
                        <button className='btn btn-primary' onClick={()=>context.changeQty(context.state.qty+1)}>+</button>
                       </p>
                    </div>
                </React.Fragment>
               )
            }
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Item
