import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ tasks, setTasks, completed, setCompleted }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
