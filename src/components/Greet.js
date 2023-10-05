//import React from 'react'
//import Hello from '../Hello'
//rfc
/*
export default function Greet(props) {
  //console.log(props.firstname)
  //props.firstname="Vinay"
  return (
    <>
    <div>
        <h1>Greet this is functional component - {props.firstname} - {props.lastname}. </h1>
    </div>
    <Hello /></>
  )
}


/*
import React from 'react'
import Hello from './Hello'

const Greet = () => {
  return (
    <>
    <div>Greet</div>
    <Hello></Hello>
    </>
  )
}
export default Greet



const Greet = ({firstname,lastname}) => {
  firstname ="Vinay"
  return (
    <>
    <div>Greet - {firstname} - {lastname} </div>
    </>
  )
}
export default Greet
*/
//props immutable readonly
import React from 'react'
import PropTypes from 'prop-types'

const Greet = props => {
  return (
    <div>
      {props.emid}-{props.ename}
      {props.children}
    </div>
  )
}

Greet.propTypes = {
  emid: PropTypes.number,
  ename: PropTypes.string.isRequired
}
Greet.defaultProps={
  emid:114,
  ename:"Degsult"
}

export default Greet