import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'components/login/login';
import SignUp from 'components/signup/signup';
import Ticket from 'components/tickets/ticket';
import { LoggedInProvider } from 'contexts/LoggedInContext';

function App() {
  return (
    <LoggedInProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Ticket />} />
        </Routes>
      </Router>
    </LoggedInProvider>
  );
}

export default App;
