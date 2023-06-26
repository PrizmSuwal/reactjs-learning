import React from 'react';
import 'components/login/form/form.css';
import SignUpFooter from 'components/signup/footer/footer';
import SignUpHeader from 'components/signup/header/header';
import SignUpForm from 'components/signup/form/form';

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
