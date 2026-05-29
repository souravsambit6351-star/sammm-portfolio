import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation component', async () => {
  render(<App />);

  const homeLink = await screen.findByText(/home/i);

  expect(homeLink).toBeInTheDocument();
});