import React, { useState } from 'react'

function HookCounter1() {
    const[count, setCount] = useState(0)

function Both(){
    // setCount(count+1)
    // setCount(count-1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount-1)
}

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>Increament</button>
      <button onClick={() => setCount(count-1)}>Decreament</button>
      <button onClick={Both}>Both</button>
    </div>
  )
}

export default HookCounter1
