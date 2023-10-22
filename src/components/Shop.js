import React from 'react'
// import L from './L1.png'
import L from '../mtg-i1.jpg'

function Shop() {
    const heading={
        color:'Green',
        fontSize:'200%',
        backgroundImage:`url(/logo192.png)`,
        padding:'2%',
        backgroundRepeat:'no-repeat'
    }
  return (
    // <div style={{color:'aqua',fontSize:'500%'}}>
    // <div style={heading}>
    //     <p>Shop!</p>
    // </div>
    // <React.Fragment>
    //     <div style={heading}>
    //         <p>Shop</p>
    //     </div>
    //     <div style={heading}>
    //         <p>This</p>
    //     </div>
    // </React.Fragment>
    <>
    <div style={heading}>
        <p>Shop</p>
    </div>
    
    <div style={{ backgroundImage: "url(/logo192.png)"}}>
        <p>This</p>
    </div>

    <div style={{ backgroundImage:`url(${L})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',color:'white'}}>
        <p>People</p>
    </div>
    </>
  )
}

export default Shop