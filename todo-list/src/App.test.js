import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import TaskProvider from './Context/TaskProvider';

const renderWithContext = () => {
  render(
    <TaskProvider>
      <App />
    </TaskProvider>
  );
}

test('check if the page is being rendered', () => {
  renderWithContext();
  const linkElement = screen.getByText(/to do/i);
  expect(linkElement).toBeInTheDocument();
});

test('check task has been created', () => {
  renderWithContext();
  const input = screen.getByTestId('input-task').querySelector('input');
  fireEvent.change(input, { target: { value: 'Almoçar' } })
  const button = screen.getByTestId('btn-new-task');
  userEvent.click(button);
  expect(screen.getByText('Almoçar')).toBeInTheDocument();
})