import React from 'react';
import 'components/common/dashboard-header/dashboard-header.css';
import Search from 'images/search.png';
import Notification from 'images/notification.png';

function DashboardHeader(props) {
  return (
    <div className="heading">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <img className="header-icon" src={Search} alt="Search" />
      <img className="header-icon" src={Notification} />
      <hr className="divider"></hr>
      <p className="username"> {props.username} </p>
      <div className="ellipse">
        <div className="pp-circle">
          <div className="pp"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
