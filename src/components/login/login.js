import './login.css'
import LoginForm from './form/form'
import LoginHeader from './header/header'
import LoginFooter from './footer/footer'
import React from 'react'

function Login () {
  return (
    <div className="body">
      <div className="loginBody">
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  )
}

export default Login
