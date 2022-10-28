import React, { Component } from 'react'

const axios=require('axios')

class Todos extends Component {

   constructor(){
    super()

    this.state={
        todos:[]
    }
   }

   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        this.setState({todos:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
   }

   mapTodos(){
    const list=this.state.todos.map((todo,index)=>
       <li className='list-group-item d-flex justify-content-between align-items-center' key={todo.id}>
          {todo.title}
          <span>
          <i className="material-icons">
            {(todo.completed) ? 'check' : 'schedule'}
          </i>
          </span>
       </li>
    )

    return list
   }

  render() {
    return (
    <div className="container">
        <p className="display-4 text-primary text-center my-4">Todos</p>
        <hr />

        <div className='list-group'>
            {this.mapTodos()}
        </div>
    </div>
    )
  }
}

export default Todos
