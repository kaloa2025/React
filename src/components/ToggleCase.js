import React,{useState} from 'react'

function ToggleCase() {
    const [lowertext,setLT]=useState("")
    const [displaytext,settoUC]=useState("")

    function handleLT(event)
    {
        setLT(event.target.value)
    }
    function ToggleCaseL()
    {
        settoUC(lowertext.toLowerCase())
    } 
    function ToggleCaseU()
    {
        settoUC(lowertext.toUpperCase())
    }    
    function handleSubmit(event)
    {
        event.preventDefault()
    }
    const button={
        color:'skyblue',
        backgroundColor:'white',
        border:'0px'
    }

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:"skyblue",width:'20%',marginLeft:'40%',marginRight:'40%',color:'white',padding:'2px'}}>
        <label>Enter Text in lowercase</label><br></br>
        <input type='text' value={lowertext} onChange={handleLT} style={{border:'skyblue'}}></input><br></br>
        <label>Toggled Case :</label><br></br>
        <textarea value={displaytext} style={{border:'skyblue'}}></textarea><br></br>
        <button type='Submit' onClick={ToggleCaseL} style={button}>Change To lowercase</button>
        <button type='Submit' onClick={ToggleCaseU} style={button}>Change To uppercase</button>
    </form>
  )
}

export default ToggleCase