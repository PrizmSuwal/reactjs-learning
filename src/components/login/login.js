import React from 'react';
import 'components/login/login.css';
import LoginForm from 'components/login/form/form';
import LoginHeader from 'components/login/header/header';
import LoginFooter from 'components/login/footer/footer';

function Login() {
  return (
    <div className="body">
      <div className="loginBody">
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}

export default Login;
