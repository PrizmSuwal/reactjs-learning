import React from 'react';
import 'components/tickets/content/content.css';
import { data } from 'data';

function DashboardContent() {
  return (
    <div className="dashboard-content-heading">
      <h1 className="dashboard-content-subheading"> All tickets</h1>
      <table>
        <thead className="table-heading">
          <th className="desc">Ticket Details</th>
          <th className="customername">Customer name</th>
          <th className="date">Date</th>
          <th className="priority">Priotity</th>
        </thead>
        <tbody className="table-body">
          {data.map((item) => (
            <React.Fragment key={item.id} className="content">
              <tr className="body-content">
                <td className="desc">{item.ticketDescription}</td>
                <td className="customername">{item.customerName}</td>
                <td className="date">{item.date}</td>
                <td className={`priority-${item.priority}`}>{item.priority}</td>
              </tr>
              <tr>
                <td colSpan="4" className="dashbord-content-divider"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardContent;
