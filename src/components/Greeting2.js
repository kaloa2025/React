//rfce
import React, { useState } from 'react'

function Greeting2(props) {

    let [isloggedIn,setisLoggedIn]=useState(props.isLogged)
    //rafc
    const clickHandler = () => {
        //setisLoggedIn(true)
        //setisLoggedIn(!isLoggedIn)
        setisLoggedIn({isloggedIn:true})
    }
    if(isloggedIn)
    {
        return(
            <div>Welcome Aalok</div>
        )
    }
    else
    {
        return(
            <div>
                <h1>welcome Guest</h1>
                <button onClick={clickHandler}>Click Me!</button>
            </div>
        )
    }


    //element approach-------------------------------------------------------------------------------------
    // let message
    // if(isloggedIn)
    // {
    //     message=<h1>Welcome Aalok</h1>
    // }
    // else
    // {
    //     message=<h1>Hello Guest</h1>
    // }
    // return message

    //ternary approach------------------------------------------------------------------------------------
    // return(
    //     (isloggedIn)?<h1>Welcome Gunjan</h1>:<h1>Hello Guest</h1>
    // )
}
export default Greeting2
