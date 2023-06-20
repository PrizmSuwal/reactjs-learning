import './form.css'
import React, { useState } from 'react'
import hidden from '../../../images/Vector.png'
import '../../common//input/input.css'
import '../../common/button/button.css'
import Checkbox from '../../common/checkbox/checkbox'
import FieldName from '../../common/field/field'
import Button from '../../common/button/button'

function LoginForm () {
  // here initially form state is set to null
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  // onchange that is typing anything will change the formstate and set its value
  function handleChange (event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  // ideally need to add these data to database
  function handleSubmit (event) {
    alert(`Name: ${formState.email} Password: ${formState.password} submitted successfully`)
    event.preventDefault()
  }

  const [password, showPassword] = useState('password')

  function handlePassword () {
    showPassword('text')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
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
      <Checkbox name="Remember me" />
      <Button name="Log In" />
    </form>
  )
}

export default LoginForm
