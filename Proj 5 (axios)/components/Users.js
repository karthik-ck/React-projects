import React, { Component } from 'react'

const axios= require('axios')

class Users extends Component {

   constructor(){
    super()

    this.state={
        users:[]
    }
   }

   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        this.setState({users:res.data})
    })
    .catch((error)=>{
        console.log(error)
    })
   }

   mapUserList(){
    const list=this.state.users.map((user,index)=>
        <li className='list-group-item d-flex justify-content-between align-items-center' key={user.id}>
            <spam>{user.name}</spam>
        </li>
    )

    return list
   }

  render() {
    return (
    <div className='container'>
        <p className="display-4 text-primary text-center my-4">Users</p>
        <hr />
        <div className='list-group'>
           {this.mapUserList()}
        </div>
    </div>
    )
  }
}

export default Users
