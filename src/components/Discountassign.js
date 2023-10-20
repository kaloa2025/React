import React, { useState } from 'react'

function Discount() { //constructor
    let x=0;
    const [price, setPrice] = useState(x)
    const [disprice ,setdisprice]=useState(price)
    
    function handleInitialPrice(event)
    {
        setPrice(event.target.value)
    }
    function Discount1()
    { //function
        let z=price-price*0.2
        setdisprice(z)
    }
    const Discount2= () =>
    { //arrow function
        let z=price-price*0.5
        setdisprice(z)
    }
    const Discount3= () =>
    { //arrow function
        let z=price-price*0.7
        setdisprice(z)
    }
    function handleSubmit(event)
    {
        event.preventDefault()
    }
return (
    <form onSubmit={handleSubmit}>
      <label>Enter Price:</label>
      <input type='number' value={price} onChange={handleInitialPrice}></input><br></br>
      <button type='submit' onClick={Discount1}>Discount1</button>
      <button type='submit' onClick={Discount2}>Discount2</button>
      <button type='submit' onClick={Discount3}>Discount3</button><br></br>
      <textarea value={disprice}></textarea>
    </form>
  )
}
export default Discount
