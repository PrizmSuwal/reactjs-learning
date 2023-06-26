import React from 'react';
import 'components/tickets/ticket.css';
import Sidebar from 'components/common/sidebar/sidebar';
import DashboardHeader from 'components/common/dashboard-header/dashboard-header';
import { useParams } from 'react-router-dom';

function Ticket() {
  const { username } = useParams();
  return (
    <div className="ticket">
      <Sidebar />
      <DashboardHeader title="Ticket" username={username} />
    </div>
  );
}

export default Ticket;
