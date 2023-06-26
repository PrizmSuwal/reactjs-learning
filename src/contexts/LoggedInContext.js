import React, { createContext, useState } from 'react';

const LoggedInContext = createContext();

const LoggedInProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  return <LoggedInContext.Provider value={{ userName, setUserName }}>{children}</LoggedInContext.Provider>;
};

export { LoggedInContext, LoggedInProvider };
