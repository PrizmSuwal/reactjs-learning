import React from 'react';
import logo from 'images/logo.png';
import 'components/common/logo/logo.css';

function LogoDisplay() {
  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <h1 className="logoDescription">Dashboard Kit</h1>
    </div>
  );
}

export default LogoDisplay;
