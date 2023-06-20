import '../../login/form/form.css'
import React, { useState } from 'react'
import hidden from '../../../images/Vector.png'
import '../../common/input/input.css'
import '../../common/button/button.css'
import Button from '../../common/button/button'
import FieldName from '../../common/field/field'

function SignUpForm () {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [password, showPassword] = useState(true)

  const [isChecked, changeChecked] = useState(false)

  function handleChange (event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  // ideally need to add these data to database
  function handleSubmit (event) {
    if (!formState.fullName.trim() || !formState.email.trim() || !formState.password.trim()) {
      alert('Fill form details correctly')
      event.preventDefault()
      return
    }
    if (formState.password !== formState.confirmPassword) {
      alert('password are diff')
      event.preventDefault()
      return
    }
    alert(`Name: ${formState.fullName}\n
        Email: ${formState.email}\n
        Password: ${formState.password}\n
        Remember Me: ${isChecked}\n
        submitted successfully`)
    event.preventDefault()
  }

  function handlePassword () {
    showPassword(!password)
  }

  function handleCheckboxChange () {
    changeChecked(!isChecked)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldName label="Fullname" />

      <div className="inputBox">
        <input
          className="inputText"
          type="text"
          placeholder="Full name"
          name="fullName"
          value={formState.fullName}
          onChange={handleChange}
        />
      </div>

      <FieldName label="Email" />

      <div className="inputBox">
        <input
          className="inputText"
          type="text"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>

      <FieldName label="Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={password ? 'password' : 'text'}
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />

        <icon className="icon" onClick={handlePassword}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>

      <FieldName label="Confirm Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formState.confirmPassword}
          onChange={handleChange}
        />

        <icon className="icon" onClick={handlePassword}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>
      <div>
      <input type="checkBox" className="checkbox" name="rememberMe" checked={isChecked} onChange={handleCheckboxChange}/>
      <span className="label">Remember Me</span>
    </div>
      <Button name="Sign Up" />
    </form>
  )
}

export default SignUpForm
