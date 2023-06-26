import React from 'react';
import 'components/common/sidebar/sidebar.css';
import SidebarLogo from 'components/common/sidebar-logo/sidebar-logo';
import SidebarItem from 'components/common/sidebar-item/sidebar-item';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarBody">
        <SidebarLogo />
        <SidebarItem itemName="Overview" />
        <SidebarItem itemName="Tickets" />
        <SidebarItem itemName="Ideas" />
        <SidebarItem itemName="Contact" />
        <SidebarItem itemName="Agents" />
        <SidebarItem itemName="Articles" />
        <hr className="divider" />
        <SidebarItem itemName="Settings" />
        <SidebarItem itemName="Subscription" />
      </div>
    </div>
  );
}

export default Sidebar;
