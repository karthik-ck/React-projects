import React, { Component } from 'react'

const axios=require('axios')

class Albums extends Component {

    constructor(){
        super()
    
        this.state={
            albums:[]
        }
       }
    
       componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res)=>{
            this.setState({albums:res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
       }

       mapAlbum(){
        const cards=this.state.albums.map((album,index)=>
          <div className='card my-2' key={album.id}>
              <div className='d-flex justify-content-start align-items-center'>
                <img src="https://www.minutebooks.com/wp-content/uploads/2017/09/Minutepress-2-1200x800.jpg" alt='...'
                style={{ width: 50, height: 'auto' }} className="me-2"/>
                <p className='card-text'>{album.title}</p>
              </div>
          </div>
        )
        return cards
       }

  render() {
    return (
    <div className="container">
        <p className="display-4 text-primary text-center my-4">Albums</p>
        <hr /> 
        {this.mapAlbum()}
    </div>
    )
  }
}

export default Albums
