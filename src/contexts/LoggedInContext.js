import React, { createContext, useEffect, useState } from 'react';

const LoggedInContext = createContext();

const LoggedInProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const updateUserName = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name);
  };

  return <LoggedInContext.Provider value={{ userName, setUserName: updateUserName }}>{children}</LoggedInContext.Provider>;
};

export { LoggedInContext, LoggedInProvider };
