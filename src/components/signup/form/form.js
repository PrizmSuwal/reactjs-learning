import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import hidden from '../../../images/Vector.png';
import '../../login/form/form.css';
import '../../common/input/input.css';
import '../../common/button/button.css';
import Button from '../../common/button/button';
import FieldName from '../../common/field/field';
import { setConfirmPasswordVisibility, setPasswordVisibility, setRememberMe } from '../../../reducers/click.reducer';
import { updateFormField } from '../../../reducers/form.reducer';

function SignUpForm() {
  const { fullName, email, password, confirmPassword } = useSelector((state) => state.form.signup);

  const passwordVisibilityState = useSelector((state) => state.click.password);
  const confirmPasswordVisibilityState = useSelector((state) => state.click.confirmPassword);
  const rememberMeState = useSelector((state) => state.click.rememberMe);

  const dispatch = useDispatch();

  // ideally need to add these data to database
  function handleSubmit(event) {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      alert('Fill form details correctly');
      event.preventDefault();
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      event.preventDefault();
      return;
    }
    alert(`Name: ${fullName}\n
        Email: ${email}\n
        Password: ${password}\n
        Remember Me: ${rememberMeState}\n
        submitted successfully`);
    event.preventDefault();
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
          value={fullName}
          onChange={(event) =>
            dispatch(updateFormField({ formName: 'signup', name: event.target.name, value: event.target.value }))
          }
        />
      </div>

      <FieldName label="Email" />

      <div className="inputBox">
        <input
          className="inputText"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) =>
            dispatch(updateFormField({ formName: 'signup', name: event.target.name, value: event.target.value }))
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
            dispatch(updateFormField({ formName: 'signup', name: event.target.name, value: event.target.value }))
          }
        />

        <icon className="icon" onClick={() => dispatch(setPasswordVisibility())}>
          <img src={hidden} alt="show password" />
        </icon>
      </div>

      <FieldName label="Confirm Password" />
      <div className="inputBox password-input">
        <input
          className="inputText"
          type={confirmPasswordVisibilityState ? 'password' : 'text'}
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) =>
            dispatch(updateFormField({ formName: 'signup', name: event.target.name, value: event.target.value }))
          }
        />

        <icon className="icon" onClick={() => dispatch(setConfirmPasswordVisibility())}>
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
      <Button name="Sign Up" />
    </form>
  );
}

export default SignUpForm;
