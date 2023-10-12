import React, { Component } from 'react'
import axios from 'axios'

export default class PhotosList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos:[]
      }
    }
    componentDidMount() 
    {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(Response=>{
            this.setState({
                photos:Response.data
            })
        })
        .catch(error=>{
          // console.log(error)
          console.error()
      })
    }
  render() {
    return (
      <div>
        <h1>PhotosList</h1>
        {this.state.photos.map((photo)=><div><h2 key={photo.id}>{photo.title}</h2>
        <img src={photo.url} ></img></div>)}
      </div>
    )
  }
}
