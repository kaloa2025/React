import React,{useState} from 'react'

function ToggleCase() {
    const [lowertext,setLT]=useState("")
    const [displaytext,settoUC]=useState("")

    function handleLT(event)
    {
        setLT(event.target.value)
    }
    function ToggleCase()
    {
        settoUC(lowertext.toUpperCase())
    }    
    function handleSubmit(event)
    {
        event.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Enter Text in lowercase</label><br></br>
        <input type='text' value={lowertext} onChange={handleLT}></input><br></br>
        <label>Text in uppercase :</label><br></br>
        <textarea value={displaytext}></textarea><br></br>
        <button type='Submit' onClick={ToggleCase}>Change Case</button>
    </form>
  )
}

export default ToggleCase