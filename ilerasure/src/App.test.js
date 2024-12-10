import { render, screen } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
