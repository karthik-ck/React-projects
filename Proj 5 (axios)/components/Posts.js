import React, { Component } from 'react'

const axios=require('axios')

class Posts extends Component {

  constructor(){
    super()

    this.state={
        posts:[]
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        this.setState({posts:res.data})
    })
    .catch(err=>{
        console.log(err)
    })
  }

  mapPost(){
    const cards=this.state.posts.map((post,index)=>
      <div className='card my-1' key={post.id}> 
        <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-text'>{post.body}</p>
        </div>
      </div>
    )

    return cards
  }

  render() {
    return (
      <div className='container'>
        <p className="display-4 text-primary text-center my-4">Posts</p>
        <hr />

        {this.mapPost()}
      </div>
    )
  }
}

export default Posts
