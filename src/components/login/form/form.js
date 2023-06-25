import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hidden from '../../../images/Vector.png';
import './form.css';
import '../../common//input/input.css';
import '../../common/button/button.css';
import FieldName from '../../common/field/field';
import Button from '../../common/button/button';
import { resetLoginForm, setPasswordVisibility, setRememberMe, updateLoginForm } from '../../../reducers/login.reducer';

function LoginForm() {
  const { email, password, passwordVisibility, rememberMe } = useSelector((state) => state.loginForm);
  const dispatch = useDispatch();

  // ideally need to add these data to database
  function handleSubmit(event) {
    if (!email.trim() || !password.trim()) {
      alert('Fill all details correctly');
      event.preventDefault();
      return;
    }
    alert(`Name: ${email} Password: ${password} ${rememberMe} submitted successfully`);
    event.preventDefault();
    dispatch(resetLoginForm());
    window.location.href = '/dashboard';
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <FieldName label="Email" />

      <div className="inputBox">
        <input
          type="text"
          placeholder="Email address"
          name="email"
          value={email}
          onChange={(event) => dispatch(updateLoginForm({ name: event.target.name, value: event.target.value }))}
        />
      </div>

      <FieldName label="Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={passwordVisibility ? 'password' : 'text'}
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => dispatch(updateLoginForm({ name: event.target.name, value: event.target.value }))}
        />

        <icon className="icon" onClick={() => dispatch(setPasswordVisibility())}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>
      <div>
        <input
          type="checkBox"
          className="checkbox"
          name="rememberMe"
          checked={rememberMe}
          onChange={() => dispatch(setRememberMe())}
        />
        <span className="label">Remember Me</span>
      </div>
      <Button name="Log In" />
    </form>
  );
}

export default LoginForm;
