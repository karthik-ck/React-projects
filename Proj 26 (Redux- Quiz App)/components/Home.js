import React from 'react'
import SelectField from './SelectField'
import './Home.css'
import QuizApi from './QuizApi'
import { useDispatch } from 'react-redux';
import { handleChangeAmount } from '../Redux/Action';
import { useNavigate } from "react-router-dom";

function Home() {

  const {response,error,loading}=QuizApi({ url: "/api_category.php" })
  const dispatch=useDispatch()
  const navigate=useNavigate()

  if(loading){
    return(
      <div className='loading'>
         ...loading
      </div>
    )
  }

  if(error){
    return(
      <h4 className='text-center mt-10'>
        Something Went Wrong !!
      </h4>
    )
  }

  const DifficultyOptions=[
    {id:'easy',name:'Easy'},
    {id:'medium',name:'Medium'},
    {id:'hard',name:'Hard'}
  ]
  const TypeOptions=[
    {id:'multiple',name:'Multiple Choice'},
    {id:'boolean',name:'True/False'}
  ]

  const handleChange=(e)=>{
   dispatch(handleChangeAmount(e.target.value))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/questions')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <SelectField label="Category" options={response.trivia_categories}/>
      <SelectField label="Difficulty" options={DifficultyOptions}/>
      <SelectField label="Type" options={TypeOptions}/>
      <div className="input-group input-num mb-3">
        <span className="input-group-text" >Amount of Questions</span>
        <input type="number" className="form-control" onChange={handleChange}/>
      </div>
      <div className='center'>
      <button type="submit" className='button col-7'>GET STARTED</button>
      </div>
      </form>
    </div>
  )
}

export default Home
