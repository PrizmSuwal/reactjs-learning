import React from 'react';
import hidden from '../../../images/Vector.png';
import '../../login/form/form.css';
import '../../common/input/input.css';
import '../../common/button/button.css';
import Button from '../../common/button/button';
import FieldName from '../../common/field/field';
import { useCheckBoxInput } from '../../../hooks/useCheckboxInput';
import { useFormInput } from '../../../hooks/useFormInput';
import { usePasswordVisibility } from '../../../hooks/usePasswordVisibility';

function SignUpForm() {
  const fullName = useFormInput();
  const email = useFormInput();
  const password = useFormInput();
  const confirmPassword = useFormInput();
  const passwordVisibility = usePasswordVisibility();
  const checkBox = useCheckBoxInput();

  // ideally need to add these data to database
  function handleSubmit(event) {
    if (!fullName.value.trim() || !email.value.trim() || !password.value.trim()) {
      alert('Fill form details correctly');
      event.preventDefault();
      return;
    }
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match');
      event.preventDefault();
      return;
    }
    if (checkBox.checked) {
      window.location.href = '/dashboard';
      event.preventDefault();
      return;
    }
    alert(`Name: ${fullName.value}\n
Email: ${email.value}\n
Password: ${password.value}\n
Remember Me: ${checkBox.checked}\n
submitted successfully`);
    event.preventDefault();
    window.location.href = '/login';
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldName label="Fullname" />

      <div className="inputBox">
        <input className="inputText" type="text" placeholder="Full name" name="fullName" {...fullName} />
      </div>

      <FieldName label="Email" />

      <div className="inputBox">
        <input className="inputText" type="text" placeholder="Email" name="email" {...email} />
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

      <FieldName label="Confirm Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={passwordVisibility.state ? 'password' : 'text'}
          placeholder="Confirm Password"
          name="confirmPassword"
          {...confirmPassword}
        />

        <icon className="icon" onClick={passwordVisibility.onClick}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>
      <div>
        <input
          type="checkBox"
          className="checkbox"
          name="rememberMe"
          {...checkBox}
        />
        <span className="label">Remember Me</span>
      </div>
      <Button name="Sign Up" />
    </form>
  );
}

export default SignUpForm;
