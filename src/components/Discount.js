import React, { useState } from 'react'

function Discount() { //constructor
    const intialValue = 3000
    let [price, setPrice] = useState(intialValue)

function Reset(){
    setPrice(intialValue)
}
function Discount3(){ //function
    setPrice(price-price*0.5)
}
const Discount2= () =>{ //arrow function 
    setPrice(price-price*0.4)
    }
return (
    <div>
      <h2>Price: {price}</h2>
      <button onClick={Reset}>Reset</button>
      <button onClick={() => setPrice(price-price*0.3)}>Discount1</button>
      <button onClick={Discount2}>Discount2</button>
      <button onClick={Discount3}>Discount3</button>
    </div>
  )
}

export default Discount
