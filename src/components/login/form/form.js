import './form.css';
import React, { useState } from 'react';
import hidden from '../../../images/Vector.png';
import '../../common//input/input.css';
import '../../common/button/button.css';
import FieldName from '../../common/field/field';
import Button from '../../common/button/button';

function LoginForm() {
  // here initially form state is set to null
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  // onchange that is typing anything will change the formstate and set its value
  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  }

  // ideally need to add these data to database
  function handleSubmit(event) {
    if (!formState.email.trim() || !formState.password.trim()) {
      alert('Fill all details correctly');
      event.preventDefault();
      return;
    }
    alert(`Name: ${formState.email} Password: ${formState.password} ${isChecked} submitted successfully`);
    event.preventDefault();
  }

  function handlePassword() {
    setPasswordVisible(!passwordVisible);
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldName label="Email" />

      <div className="inputBox">
        <input type="text" placeholder="Email address" name="email" value={formState.email} onChange={handleChange} />
      </div>

      <FieldName label="Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />

        <icon className="icon" onClick={handlePassword}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>
      <div>
        <input type="checkBox" className="checkbox" name="rememberMe" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="label">Remember Me</span>
      </div>
      <Button name="Log In" />
    </form>
  );
}

export default LoginForm;
