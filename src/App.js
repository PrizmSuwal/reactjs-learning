import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Ticket from './components/tickets/ticket';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Ticket />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
