import './footer.css'
import React from 'react'

function FooterDescription (props) {
  return (
    <div className="description">
      <span>
        {' '}
        {props.title}
        <a className="link" href={props.link}>
          {props.linkValue}
        </a>
      </span>
    </div>
  )
}

export default FooterDescription
