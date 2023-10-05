import React, { Component } from 'react'
//rcc
export default class Message extends Component {
    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
         message:"welcome visitor"
      }
    }
    changeMessage()
    {
        this.setState({
            message:"Thanks for subs"
        })
        //this.state.message="thanks for subscribing"
    }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.message}
        <button onClick={()=>{this.changeMessage()}}>Subscribe</button> </h1>
      </div>
    )
  }
}
