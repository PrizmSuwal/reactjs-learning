import React, { useState } from 'react';
import hidden from '../../../../images/Vector.png';
import './input.css';
function Input(props) {
  const [password, showPassword] = useState('password');

  function handlePassword() {
    showPassword('text');
  }
  return (
    <div className="inputBox">
      <input
        className="inputText"
        type={props.type === 'password' ? password : 'text'}
        placeholder={props.placeholder}
        name={props.name}
      />
      {props.type === 'password' && (
        <button className="icon" onClick={handlePassword}>
          <img src={hidden} alt="show password" />
        </button>
      )}
    </div>
  );
}

export default Input;
