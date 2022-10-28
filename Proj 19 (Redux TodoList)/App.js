import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import { AddTodoAction, RemoveTodoAction } from './TodoActions'

function App() {

  const [todo,setTodo]=useState()

   const dispatch=useDispatch()
   const Todo=useSelector((state)=>state.Todo);
   const {todos}=Todo

  const handleSubmit=(e)=>{
     e.preventDefault();
     dispatch(AddTodoAction(todo))
  }

  const removeHandler=(t)=>{
    dispatch(RemoveTodoAction(t))
  }

  return (
    <div className='App'>
       <header className='App-Header'>
          <h2>Todo List App in Redux</h2>
          <form onSubmit={handleSubmit}>
            <input placeholder='Enter a Todo' onChange={(e)=>setTodo(e.target.value)}/>
            <button className='button' type="submit">Go</button>
          </form>
          <ul className='allTodos'>
            {
              todos && todos.map((t)=>(
                <li className='singleTodo' key={t.id}>
                <span className='todoText'>{t.todo}</span>
                <button className='list-btn' onClick={()=>removeHandler(t)}>Delete</button>
              </li>
              ))
            }
          </ul>
       </header>

    </div>
  )
}

export default App
