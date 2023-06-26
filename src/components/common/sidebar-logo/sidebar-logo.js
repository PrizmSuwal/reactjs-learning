import React from 'react';
import logo from 'images/logo.png';
import 'components/common/sidebar-logo/sidebar-logo.css';

function SidebarLogo() {
  return (
    <div className="sidebarLogo">
      <img className="sidebarLogo-img" src={logo} alt="logo" />
      <h5 className="sidebarLogo-description">Dashboard Kit</h5>
    </div>
  );
}

export default SidebarLogo;
