import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'components/login/login';
import SignUp from 'components/signup/signup';
import Ticket from 'components/tickets/ticket';
import LoggedInContext from 'contexts/LoggedInContext';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <LoggedInContext.Provider value={{ userName, setUserName }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Ticket />} />
        </Routes>
      </Router>
    </LoggedInContext.Provider>
  );
}

export default App;
