import React from 'react';
import hidden from '../../../images/Vector.png';
import './form.css';
import '../../common//input/input.css';
import '../../common/button/button.css';
import FieldName from '../../common/field/field';
import Button from '../../common/button/button';
import { useCheckBoxInput } from '../../../hooks/useCheckboxInput';
import { useFormInput } from '../../../hooks/useFormInput';
import { usePasswordVisibility } from '../../../hooks/usePasswordVisibility';

function LoginForm() {
  const email = useFormInput();
  const password = useFormInput();
  const passwordVisibility = usePasswordVisibility();
  const checkBox = useCheckBoxInput();

  // ideally need to add these data to database
  function handleSubmit(event) {
    if (!email.value.trim() || !password.value.trim()) {
      alert('Fill all details correctly');
      event.preventDefault();
      return;
    }
    alert(`Name: ${email.value} Password: ${password.value} ${checkBox.checked} submitted successfully`);
    event.preventDefault();
    window.location.href = '/dashboard';
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldName label="Email" />

      <div className="inputBox">
        <input type="text" placeholder="Email address" name="email" {...email} />
      </div>

      <FieldName label="Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={passwordVisibility.state ? 'password' : 'text'}
          placeholder="Password"
          name="password"
          {...password}
        />

        <icon className="icon" onClick={passwordVisibility.onClick}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>
      <div>
        <input type="checkBox" className="checkbox" name="rememberMe" {...checkBox} />
        <span className="label">Remember Me</span>
      </div>
      <Button name="Log In" />
    </form>
  );
}

export default LoginForm;
