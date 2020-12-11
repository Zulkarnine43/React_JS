import React, { Component } from 'react'

export default class index extends Component {
constructor(props){
    super(props)

    this.state={
        changedValue: ''
    }
}


    handleOnChange=(e)=>{
     this.setState({
         changedValue:e.target.value
     })
    }
   
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleOnChange}/>
             {/* <button onClick={this.handleClick}>click</button> */}
        <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
