import React from 'react'

function PropsExample (props) {
  return (
    <div>
      <h1>
        {' '}
        Calling from {props.name} {props.class}
      </h1>
      {props.children}
    </div>
  )
}

export default PropsExample
