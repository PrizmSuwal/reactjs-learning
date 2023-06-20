import './button.css'
import React from 'react'

function Button (props) {
  return (
    <button className="actionButton" type="submit">
      <span className="actionHeading">{props.name}</span>
    </button>
  )
}

export default Button
