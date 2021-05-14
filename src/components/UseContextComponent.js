import React, { useState, useEffect, createContext } from 'react';
import { Button, Text } from 'react-native';

const LOG = '[USE CONTEXT COMPONENT]';

export const UseContext = createContext();

export const UseContextComponent = ({ children }) => {
  const [myNumbers, setMyNumbers] = useState([]);

  useEffect(() => {
    console.log(LOG, 'mounted');

    setTimeout(() => {
      console.log(LOG, 'setting numbers');
      setMyNumbers([1, 2, 3, 4, 5]);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(LOG, 'updated');
  });

  return (
    <UseContext.Provider value={{ numbers: myNumbers }}>
      {children}
    </UseContext.Provider>
  );
};
