import React, { Component } from 'react'

export default class EVENT_BINDING extends Component {
   
   constructor(props){
       super(props)

       this.state={
           count:0
       }
    //    this.handleClick=this.handleClick.bind(this);
   }


   //ES6 FUNCTION
//    handleClick=()=>{
//        this.setState({
//            count:this.state.count+1
//        })
//    }


//NORMAL FUNCTION
handleClick(){
           this.setState({
               count:this.state.count+1
           })
       }
   
   
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick.bind(this)}>Increase</button>
            </div>
        )
    }
}
