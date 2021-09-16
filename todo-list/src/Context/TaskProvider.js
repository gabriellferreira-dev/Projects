import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext({});

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const tasksStorage = localStorage.getItem('tasks');
    const completedTasksStorage = localStorage.getItem('completedTasks');
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }
    if (completedTasksStorage) {
      setCompleted(JSON.parse(completedTasksStorage));
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{ tasks, setTasks, completed, setCompleted }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
