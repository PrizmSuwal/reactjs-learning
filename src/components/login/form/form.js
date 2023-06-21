import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hidden from '../../../images/Vector.png';
import './form.css';
import '../../common//input/input.css';
import '../../common/button/button.css';
import FieldName from '../../common/field/field';
import Button from '../../common/button/button';
import { setPasswordVisibility, setRememberMe } from '../../../reducers/click.reducer';
import { resetLoginForm, updateFormField } from '../../../reducers/form.reducer';

function LoginForm() {
  const { email, password } = useSelector((state) => state.form.login);
  const passwordVisibilityState = useSelector((state) => state.click.password);
  const rememberMeState = useSelector((state) => state.click.rememberMe);
  const dispatch = useDispatch();

  // ideally need to add these data to database
  function handleSubmit(event) {
    if (!email.trim() || !password.trim()) {
      alert('Fill all details correctly');
      event.preventDefault();
      return;
    }
    alert(`Name: ${email} Password: ${password} ${rememberMeState} submitted successfully`);
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
          onChange={(event) =>
            dispatch(updateFormField({ formName: 'login', name: event.target.name, value: event.target.value }))
          }
        />
      </div>

      <FieldName label="Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={passwordVisibilityState ? 'password' : 'text'}
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) =>
            dispatch(updateFormField({ formName: 'login', name: event.target.name, value: event.target.value }))
          }
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
          checked={rememberMeState}
          onChange={() => dispatch(setRememberMe())}
        />
        <span className="label">Remember Me</span>
      </div>
      <Button name="Log In" />
    </form>
  );
}

export default LoginForm;
