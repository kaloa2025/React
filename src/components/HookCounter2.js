import React, { useState } from 'react'

function HookCounter2(props) {
    const intialValue = 0
    let [count, setCount] = useState(intialValue)

function Reset(){
    setCount(intialValue)
} 

const onIncreament= () =>{
    for(var i=0;i<5;i++){
    setCount(prevCount=> prevCount+ props.value)
    }
}
// function onIncreament(){
//     count= count+1
// }
// function increamentFive(){
//     for(var i=0;i<5;i++){
//           onIncreament()
//     }
//   }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={onIncreament}>IncreamentBy5</button> 
      <button onClick={Reset}>Reset</button>       
    </div>
  )
}

export default HookCounter2
