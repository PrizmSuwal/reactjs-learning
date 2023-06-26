import React from 'react';
import ticketIcon from 'images/ticketicon.png';
import 'components/common/sidebar-item/sidebar-item.css';

function SidebarItem(props) {
  return (
    <div className="sidebarItem">
      <img className="sidebarItem-icon" src={ticketIcon} alt="ticket" />
      <h6 className="sidebarItem-title">{props.itemName}</h6>
    </div>
  );
}

export default SidebarItem;
