import React, { useState } from 'react'
//rfc
export default function HookCounter3() {
    const[items,setItem]=useState([])
    const addItem=()=>{
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            <li>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </li>
        </ul>
    </div>
  )
}