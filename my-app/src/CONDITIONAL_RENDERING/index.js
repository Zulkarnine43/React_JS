import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
export default class index extends Component {
  
  constructor(props){
      super(props)
      this.state={
          isLoggedIn: true
      }
  }
  
    render() {
const {isLoggedIn}=this.state

let element;

// if(isLoggedIn){
//     element= <HomePage/>
// }else{
//     element= <LoginPage/>
// }

// element=isLoggedIn ? <HomePage/> : <LoginPage/>

return (
    <div>
        {isLoggedIn ? <HomePage/> : <LoginPage/>}
    </div>
)

    }
}
