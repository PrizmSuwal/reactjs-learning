import React, { useContext } from 'react';
import 'components/tickets/ticket.css';
import Sidebar from 'components/common/sidebar/sidebar';
import DashboardHeader from 'components/common/dashboard-header/dashboard-header';
import { LoggedInContext } from 'contexts/LoggedInContext';
import DashboardContent from './content/content';

function Ticket() {
  const { userName } = useContext(LoggedInContext);

  return (
    <div className="ticket">
      <Sidebar />
      <div className="ticket-body">
        <DashboardHeader title="Tickets" username={userName} />
        <DashboardContent />
      </div>
    </div>
  );
}

export default Ticket;
