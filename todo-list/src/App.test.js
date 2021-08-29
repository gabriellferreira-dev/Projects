import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('check if the page is being rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/to do/i);
  expect(linkElement).toBeInTheDocument();
});
