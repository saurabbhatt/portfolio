import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

test('renders navigation links', () => {
  render(<Navigation />);
  expect(screen.getByText('Work')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
}); 