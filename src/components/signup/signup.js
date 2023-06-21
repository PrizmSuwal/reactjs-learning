import '../login/form/form.css';
import SignUpFooter from './footer/footer';
import SignUpHeader from './header/header';
import SignUpForm from './form/form';
import React from 'react';

function SignUp() {
  return (
    <div className="body">
      <div className="loginBody">
        <SignUpHeader />
        <SignUpForm />
        <SignUpFooter />
      </div>
    </div>
  );
}

export default SignUp;
