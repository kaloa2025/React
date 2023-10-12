import React, { useState } from 'react'

export default function HookCounter4() {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <form>
        <input type='text' value={name.firstName}
        onChange={e=>setName({...name,firstName:e.target.value})}/>
        <h1>FirstName is {name.firstName}</h1>
        <input type='text' value={name.lastName}
        onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h1>LastName is {name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}
