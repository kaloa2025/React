import React, { useState } from 'react'

function UserFormF() {
    const [userName, setUN] = useState("");
    const [comment, setC] = useState("");
    
    const handleUNC = (event) => {
        setUN(event.target.value)
    }
    const handleCC = (event) => {
        setC(event.target.value)
    }
    function handleSubmit(event){
        alert(`${userName} ${comment}`)
        event.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>UserName : </label><br></br>
        <input type='text' value={userName} onChange={handleUNC}></input><br></br>
        <label>Comments : </label><br></br>
        <textarea value={comment} onChange={handleCC}></textarea><br></br>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UserFormF