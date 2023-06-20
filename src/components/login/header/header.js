import Heading from '../../common/heading/heading'
import LogoDisplay from '../../common/logo/logo'
import SubHeading from '../../common/sub-heading/sub-heading'
import React from 'react'

export default function LoginHeader () {
  return (
    <div>
      <LogoDisplay />
      <Heading title="Log into Dashboard kit" />
      <SubHeading title="Enter your email and password below" />
    </div>
  )
}
