import '../../login/form/form.css'
import React, { useState } from 'react'
import hidden from '../../../images/Vector.png'
import '../../login/form/input/input.css'
import '../../login/form/button/button.css'
import Checkbox from '../../common/checkbox/checkbox'
import Button from '../../login/form/button/button'
import FieldName from '../../login/form/field/field'

function SignUpForm () {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [password, showPassword] = useState('password')

  function handleChange (event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  // ideally need to add these data to database
  function handleSubmit (event) {
    alert(`Name: ${formState.fullName}\n
        Email: ${formState.email}\n
        Password: ${formState.password}\n
        submitted successfully`)
    event.preventDefault()
  }

  function handlePassword () {
    showPassword('text')
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
      <div className="inputBox">
        <input
          className="inputText"
          type="password"
          placeholder="Password"
          name={password}
          value={formState.value}
          onChange={handleChange}
        />

        <button className="icon" onClick={handlePassword}>
          <img src={hidden} alt="show password" />
        </button>
      </div>

      <FieldName label="Confirm Password" />
      <div className="inputBox">
        <input
          className="inputText"
          type="password"
          placeholder="Confirm Password"
          name={password}
          value={formState.value}
          onChange={handleChange}
        />

        <icon className="icon" onClick={handlePassword}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>
      <Checkbox name="Remember me" />
      <Button name="Sign Up" />
    </form>
  )
}

export default SignUpForm
