import { useState } from 'react';
import hidden from '../../../../images/Vector.png';
import './input.css'
function Input(props) {
    const [password, showPassword] = useState('password');

    function handlePassword() {
      showPassword('text')
    }
    return (
      <div className='inputBox'>
        <input
          className='inputText'
          type={password}
          placeholder={props.placeholder}
        />
          {props.type === 'password' && 
          <button  className='icon' onClick={handlePassword}>
          <img src={hidden} alt="show password" />
            </button>}
      </div>
     
    );
}

export default Input;
