import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
      /*
        this.setState({
         count:this.state.count+1
        })
       console.log(this.state.count)
      this.setState({
        count:this.state.count+1
      },
      ()=>{
        console.log('Callback value',this.state.count)
      }
      )
      this.setState((PrevState)=>({
        count:PrevState.count+1
      }),
      ()=>{
        console.log('Callback value',this.state.count)
      })*/
      this.setState((PrevState,props)=>({
        count:PrevState.count + props.value
      }),
      ()=>{
        console.log('Callback value',this.state.count)
      })
    }
    reset(){
        this.setState({
            count:this.state.count-this.state.count
        })
    }
    decrement(){
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
    incrementfive()
    {
      for(var i=0;i<5;i++)
      {
        this.increment()
      }
    }

  render() {
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        {/*<button onClick={()=>{this.increment()}}>increment</button>
        <button onClick={()=>{this.reset()}}>reset</button>
        <button onClick={()=>{this.decrement()}}>decrement</button>*/}
        <button onClick={()=>{this.incrementfive()}}>+5</button>
      </div>
    )
  }
}
