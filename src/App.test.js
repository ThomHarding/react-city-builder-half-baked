import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial slogan', () => {
  render(<App />);
  const linkElement = screen.getByText('Sparkling Fields of Grey');
  expect(linkElement).toBeInTheDocument();
});
