import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function TaskProvider({children}) {
  const [tasks, setTasks] = useState([]);

  return (
    <GlobalContext.Provider value={ { tasks, setTasks } }>
      {children}
    </GlobalContext.Provider>
  )
}