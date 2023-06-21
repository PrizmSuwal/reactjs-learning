import React from 'react';
import './sidebar-item.css';
import ticketIcon from '../../../images/ticketicon.png';

function SidebarItem(props) {
  return (
    <div className="sidebarItem">
      <img className="sidebarItem-icon" src={ticketIcon} alt="ticket" />
      <h6 className="sidebarItem-title">{props.itemName}</h6>
    </div>
  );
}

export default SidebarItem;
