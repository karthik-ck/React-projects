import React, { Component } from 'react'
import Item from './Item';

export const MyContext=React.createContext()

class App extends Component {

  constructor(){
    super();

    this.state={
      name:'Tea',
      price:10,
      qty:1
    }
  }

  render() {
    return (
      <div>
        <MyContext.Provider value={{
          state:this.state,
          changeQty:(newQty)=>this.setState({qty:newQty})
        }}>
        <div className='container'>
          <Item />
        </div>
        </MyContext.Provider>
      </div>
    )
  }
}

export default App
