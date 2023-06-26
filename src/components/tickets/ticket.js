import React, { useContext } from 'react';
import 'components/tickets/ticket.css';
import Sidebar from 'components/common/sidebar/sidebar';
import DashboardHeader from 'components/common/dashboard-header/dashboard-header';
import LoggedInContext from 'contexts/LoggedInContext';

function Ticket() {
  const { userName } = useContext(LoggedInContext);
  return (
    <div className="ticket">
      <Sidebar />
      <DashboardHeader title="Tickets" username={userName} />
    </div>
  );
}

export default Ticket;
