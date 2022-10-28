import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleChangeCategory, handleChangeDifficulty, handleChangeType } from '../Redux/Action';

const SelectField = (props) => {
    const {label,options}=props;
    const [value,setValue]=useState("")
    const dispatch=useDispatch()

    const handleChange=(e)=>{
       setValue(e.target.value)
       switch(label){
        case "Category":
          dispatch(handleChangeCategory(e.target.value))
          break;
        case "Difficulty":
          dispatch(handleChangeDifficulty(e.target.value))
          break;
        case "Type":
          dispatch(handleChangeType(e.target.value))
          break;
        default:
          return      
       }
    }
  return (
    <div>
      <div className="input-group mb-3">
         <label className="input-group-text" >{label}</label>
           <select className="form-select" value={value} onChange={handleChange}>
             {options.map(({name,id})=>(
              <option key={id} value={id}>{name}</option>
             ))}
           </select>
      </div>
    </div>
  )
}

export default SelectField
