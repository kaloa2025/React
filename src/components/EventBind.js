//bind event handler in clss constructor, render function , arrow function
//rce or rcc
import React, { Component } from 'react'
//rconst
export class EventBind extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message:'Hello'
        }
        //this.clickHandler=this.clickHandler.bind(this) //in class constructor
      }
      clickHandler(){
          this.setState({
              message:'Clicked!'
          })
      }
  render() {
    return (
      <div>
        <h1>Message:{this.state.message}</h1>
        <br></br>
        {/* <button onClick={this.clickHandler}>ChangeMessage</button> */}
        <button onClick={this.clickHandler.bind(this)}>Change</button> 
        </div>
    )
  }
}

export default EventBind