import React, { useEffect, useState } from 'react'
import './Questions.css'
import QuizApi from './QuizApi'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { handleChangeScore } from '../Redux/Action'

const getRandomInt=(max)=>{
  return Math.floor(Math.random() * Math.floor(max))
}

const Quetions = () => {
  const {que_category,que_difficulty,que_type,amount_of_que,score}=useSelector(state=>state)

  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  let apiUrl=`/api.php?amount=${amount_of_que}`
  const {response,loading}=QuizApi({url:apiUrl})

  const [queIndex,setQueIndex]=useState(0)
  const [options,setOptions]=useState([])

  useEffect(()=>{
    if(response?.results.length){
      const que=response.results[queIndex]
      let answer=[...que.incorrect_answers]
      answer.splice(
        getRandomInt(que.incorrect_answers.length),0,que.correct_answer
      )
      setOptions(answer)
    }
  },[response,queIndex])

  if(que_category){
     apiUrl=apiUrl.concat(`&category=${que_category}`)
  }
  if(que_difficulty){
    apiUrl=apiUrl.concat(`&difficulty=${que_difficulty}`)
   }
  if(que_type){
   apiUrl=apiUrl.concat(`&type=${que_type}`)
  }

  if(loading){
    return(
      <div className='loading'>
        ...loading
      </div>
    )
  }

  const handleClickAnswer=(e)=>{
    const que=response.results[queIndex]
    if(e.target.textContent===que.correct_answer){
        dispatch(handleChangeScore(score + 1))
    }
    if(queIndex+1 <response.results.length){
      setQueIndex(queIndex +1)
    }
    else{
      navigate('/result')
    }
  }
  return (
    <div className='questions'>
      <h3>Question {queIndex +1}</h3>
      <div className='block'>
         <div>{response.results[queIndex].question}</div>
         <div className='buttons'>
           {options.map((data,id)=>
            <button key={id} className="btn btn-primary" onClick={handleClickAnswer}>{data}</button>
           )}
         </div>
      </div>
      <div className='score'>
        Score : {score}/{response.results.length}
      </div>
    </div>
  )
}

export default Quetions
