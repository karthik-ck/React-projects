import React from 'react'
import { CartState } from './Context'
import './Filters.css'
import Ratings from './Ratings'

const Filters = () => {
    //const [rate,setRate]=useState(0)

    const {productState:{byStock,byFastDelivery,byRating,sort,searchQuery},productDispatch}=CartState()

    console.log(byStock,byFastDelivery,byRating,sort,searchQuery)
  
  return (
    <div className='filters'>
       <span className='title'>Filter Products</span>
       <span>
       <div className="form-check">
          <input className="form-check-input" type="radio" value=""  name="group1" 
          onChange={()=>productDispatch({
            type:'SORT_BY_PRICE',
            payload:'lowToHigh'
          })} 
          checked={sort==='lowToHigh'?true:false}/>
          <label className="form-check-label">
             Ascending
          </label>
       </div>
       </span>
       <span>
        <div className="form-check">
           <input className="form-check-input" type="radio" value="" name="group1"
           onChange={()=>productDispatch({
            type:'SORT_BY_PRICE',
            payload:'HighToLow'
          })} 
          checked={sort==='HighToLow'?true:false}/>
           <label className="form-check-label">
            Descending
           </label>
          </div>
       </span>
       <span>
       <div className="form-check">
         <input className="form-check-input" type="checkbox" value="" name="group1"
         onChange={()=>productDispatch({
          type:'FILTER_BY_STOCK'
         })}
         checked={byStock}/>
         <label className="form-check-label">
           Include out of Stock
         </label>
       </div>
       </span>
       <span>
       <div className="form-check">
         <input className="form-check-input" type="checkbox" value="" name="group1"
         onChange={()=>productDispatch({
          type:'FILTER_BY_DELIVERY'
         })}
         checked={byFastDelivery}/>
         <label className="form-check-label">
           Fast Delivery Only
         </label>
       </div>
       </span>
       <span>
        <label style={{paddingRight:10}}>Rating: </label>
        {/*<Ratings 
        rating={rate} 
        style={{cursor:'pointer',color:"green"}}
        onClick={(index)=>setRate(index+1)}/>
       */}
       <Ratings 
        rating={byRating} 
        style={{cursor:'pointer',color:"green"}}
        onClick={(index)=>
        productDispatch({
          type:'FILTER_BY_RATING',
          payload:index+1
        })}/>
       </span>
       <button type="button" className='btn btn-info' onClick={()=>productDispatch({
        type:'CLEAR_FILTER'
       })}>Clear Filters</button>
    </div>
  )
}

export default Filters
