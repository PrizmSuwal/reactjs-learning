import React from 'react';
import Heading from 'components/common/heading/heading';
import LogoDisplay from 'components/common/logo/logo';
import SubHeading from 'components/common/sub-heading/sub-heading';

export default function LoginHeader() {
  return (
    <div>
      <LogoDisplay />
      <Heading title="Log into Dashboard kit" />
      <SubHeading title="Enter your email and password below" />
    </div>
  );
}
