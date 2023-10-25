import React from 'react'
import './Contact.css'
//rfc
export default function Contact(props) {
    let className=props.primaryatt?'primary':'fontxl'
  return (
    <div className={className}>
        Contact Page
    </div>
  )
}
