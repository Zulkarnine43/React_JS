import React, { Component } from 'react'

export default class HOOKS_USESTATE extends Component {
  constructor(props){
      super(props)

      this.state={
          count: 0
      }
  }
  handleIncrement=()=>{
      this.setState({
          count: this.state.count+1
      })
  }
  
    render() {
        return (
            <div>
               <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
           
            </div>
        )
    }
}
