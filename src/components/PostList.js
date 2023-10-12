//rcc
import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {
    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    //cdm
    componentDidMount() { 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            this.setState({
                posts:Response.data
            })
        })//chaining operator
        .catch(error=>{
            // console.log(error)
            console.error()
        })
     }
  render() {
    return (
      <div>
        <h2>PostList</h2>
        {this.state.posts.map((post)=><div><h2 key={post.id}>{post.title}</h2>
        <h6 key={post.id}>{post.body}</h6></div>)}
      </div>
    )
  }
}
