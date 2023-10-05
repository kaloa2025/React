/*
class Welcome extends Component {
  render() {
    return (
      <div>Welcome, {this.props.firstname} - {this.props.lastname}</div>
    )
  }
}
export default Welcome

Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  }
Welcome.defaultProps={
    firstname:"first",
    lastname:"last"
  }*/
  import PropTypes from 'prop-types'
  import React, { Component } from 'react'
  
  export class Welcome extends Component {
    static propTypes = {}
  
    render() {
      return (
        <div>Welcome</div>
      )
    }
  }
  
  export default Welcome
  
  