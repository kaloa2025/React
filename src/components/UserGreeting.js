import React, { Component } from 'react'
//rce
export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn:false
      }
    }
    clickHandler(){
        this.setState({
            isloggedIn:true
        })
    }
  render() 
  {
    // let message
    // //if(this.state.isloggedIn)
    // if(this.props.isloggedIn)
    // {
    //     message=<h1>Welcome Aalok</h1>
    // }
    // else
    // {
    //     message=<h1>Hello Guest</h1>
    // }
    // return message


    // if(this.state.isloggedIn)
    // {
    //     return(<div>Welcome Gunjan</div>)
    // }
    // else
    // {
    //     return(
    //     <>
    //     <button onClick={()=>this.clickHandler()}>Click Me!</button>
    //     <div>Welcome, Guest</div>
    //     </>
    //     )
    // }
    return(
        (this.state.isloggedIn)?<h1>Welcome Gunjan</h1>:<h1>Hello Guest</h1>
    )
  }
}

export default UserGreeting