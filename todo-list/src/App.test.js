import { fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import ListTasksToDo from './components/ListTasksToDo';
import ListTasksCompleted from './components/ListTasksCompleted';
import renderWithRouter from './renderWithRouter';

const createTask = (task) => {
  const { getByTestId } = renderWithRouter(<App />);
  const input = getByTestId('input-task');
  fireEvent.change(input, { target: { value: 'Almoçar' } });
  const button = getByTestId('btn-new-task');
  userEvent.click(button);
};

test('check if the page is being rendered', () => {
  const { getByText } = renderWithRouter(<App />);
  const linkElement = getByText(/to do/i);
  expect(linkElement).toBeInTheDocument();
});

test('check task has been created', () => {
  const { getByTestId } = renderWithRouter(<ListTasksToDo />);
  createTask();
  expect(getByTestId('task-0')).toBeInTheDocument();
});

test('checks if task has been removed from "to do"', () => {
  const { getByTestId } = renderWithRouter(<ListTasksToDo />);
  const task = getByTestId('task-0');
  userEvent.click(task);
  const markConcluded = getByTestId('mark-task-0-concluded');
  userEvent.click(markConcluded);
  expect(task).not.toBeInTheDocument();
});

test('check if task was entered in "completed"', () => {
  const { getByTestId } = renderWithRouter(<ListTasksCompleted />);
  const task = getByTestId('task-0');
  userEvent.click(task);
  expect(task).toBeInTheDocument();
});
