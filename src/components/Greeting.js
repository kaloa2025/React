import React, { useState } from 'react'
function Greeting() {
  const intialValue=false
  let [isloggedIn, setLog] = useState(intialValue)
function Login()
{
  setLog(true)
}
if(isloggedIn)
{
  return(<div>Welcome Aalok</div>)
}
else
{
  return(
    <div>
    <h2>Welcome Guest</h2>
    <button onClick={Login}>ClickMe!</button>
  </div>
)
}
}
export default Greeting