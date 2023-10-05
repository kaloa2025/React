import './Register.css'
import React from 'react'
import PropTypes from 'prop-types'
function Register(props) {
  return (
    <div>
        <table id='t'>
            <tr>
                <td>Name</td>
                <td>{props.ename}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{props.eage}</td>
            </tr>
            <tr>
                <td>Department</td>
                <td>{props.edept}</td>
            </tr>
            <tr>
                <td>Picture</td>
                <td><img src={props.epic} id='d'></img></td>
            </tr>
        </table>
    </div>
  )
}

Register.propTypes = {
    eage: PropTypes.number,
    ename: PropTypes.string.isRequired,
    edept: PropTypes.string.isRequired,
    epic: PropTypes.node
}
Register.defaultProps={
    ename:"Nm",
    eage:0,
    edept:"CSE",
    epic:<img src='download.jpeg'></img>
  }
export default Register
