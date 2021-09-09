import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import TaskProvider from './Context/TaskProvider';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <TaskProvider>
        <Router history={ history }>{component}</Router>
      </TaskProvider>,
    ),
  });
};

export default renderWithRouter;