import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleChangeAmount, handleChangeScore } from '../Redux/Action'

const Results = () => {
  const {amount_of_que,score}=useSelector(state=>state)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const handleHomeChange=()=>{
    dispatch(handleChangeScore(0))
    dispatch(handleChangeAmount(50))

    navigate('/')
  }
  return (
    <>
    <div className='result'>
       Final Score : {score}
       <span>Number of Question : {amount_of_que}</span>
       <span>Percentage : {(score/amount_of_que)*100} %</span>
       <button className='btn btn-success' onClick={handleHomeChange}>Back to Home Page</button>
    </div>
    </>
  )
}

export default Results
