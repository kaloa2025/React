import React, { useState } from 'react'

function Discountassign() {
    const [initialPrice, setIP] = useState("");
    const [getDiscount, setGD] = useState("");
    const handleInitialPrice = (event) => {
        setIP(event.target.value)
    }
    function Discount1()
    { //function
        let dis1=initialPrice;
        setGD(dis1-dis1*0.2)
    }
    function Discount2()
    { //function
        let dis2=initialPrice;
        setGD(dis2-dis2*0.5)
    }
    function Discount3()
    { //function
        let dis3=initialPrice;
        setGD(dis3-dis3*0.6)
    }
    function handleGetDiscount(event){
        setGD(event.target.value)
    }

    return (
        <form onSubmit={this.handleSubmit}>
        <label>Enter the price : </label><br></br>
        <input type='text' value={initialPrice} onChange={handleInitialPrice}></input><br></br>
        <button type='submit' onClick={Discount1}>Discount1</button><br></br>
        <button type='submit' onClick={Discount2}>Discount2</button><br></br>
        <button type='submit' onClick={Discount3}>Discount3</button><br></br>
        <label>Discount: </label><br></br>
        <textarea value={getDiscount} onChange={handleGetDiscount}></textarea><br></br>
        </form>
        )
}

export default Discountassign