import React from 'react'
//mapping function
export default function NameList(){
    const names=['Aalok','kaloa']
    const namesList=names.map((name,index)=><h2 key={index}>{name}</h2>)
    return (
      <div>{namesList}</div>
    )
}