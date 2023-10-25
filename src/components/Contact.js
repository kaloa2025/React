import React from 'react'
import './Contact.css'
//rfc
export default function Contact(props) {
    let className=props.primary?'primary':'fontxl'
  return (
    <div className={className}>
        Contact Page
    </div>
  )
}
