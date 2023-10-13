import React, { Component } from 'react'
//rcc or rce
export default class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:''
      }
    }
    handleSubmit=event=>{
        alert(`${this.state.userName} ${this.state.comments}`)
        event.preventDefault()
    }
    handleUNC= (event) => {
      this.setState({
        userName:event.target.value
      })
    }
    handleCC=event=>{
      this.setState({
        comments:event.target.value
      })
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>User Name : </label><br></br>
        <input type='text' value={this.state.userName} onChange={this.handleUNC}></input><br></br>
        <label>Comments : </label><br></br>
        <textarea value={this.state.comments} onChange={this.handleCC}></textarea><br></br>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
