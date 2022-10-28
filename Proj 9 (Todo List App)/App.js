import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([])
  const [editId,setEditId]=useState(0)

  const formSubmit=(e)=>{
     e.preventDefault();
     
     if(todo!==''){
      setTodos([...todos,{id:`${todo}`,todo}])
      setTodo('')
     }

     if(editId){
      const editTodo=todos.find((i)=>i.id===editId);
      const updateTodos=todos.map((t)=>
         t.id===editTodo.id ? 
           (t={id:t.id,todo}) :
           {id:t.id,todo:t.todo}
      );
      setTodos(updateTodos);
      setEditId(0);
      setTodo('')
      return;
     }
  }

  const handleDelete=(id)=>{
    const delTodo=todos.filter((to)=>to.id!==id);
    setTodos([...delTodo])
  }

  const handleEdit=(id)=>{
    const editTodo=todos.find((i)=>i.id===id);
    setTodo(editTodo.todo)
    setEditId(id)
  }

  return (
    <div className='App'>
      <div className='container'>
         <h2>Todo List App</h2>

         <form className='todoForm' onSubmit={formSubmit}>
          <input type="text" value={todo} onChange={(event)=>setTodo(event.target.value)}/>
          <button type="submit">{(editId)?'Edit':'Go'}</button>
         </form>

         <ul className='allTodo'>
          {
            todos.map((t)=>(
            <li className='listTodo'>
              <span className="todoText" key={t.id}>{t.todo}</span>
              <button onClick={()=>handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
            ))
          }
         </ul>
      </div>    
    </div>
  )
}

export default App
