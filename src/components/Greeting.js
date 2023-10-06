import React from 'react'
//rfc
export default function Greeting(props) 
{
    props.isloggedIn=false
  return (
    (props.isloggedIn)?<h1>Welcome aalok</h1>:<h1>Hello Guest</h1>
  )
}