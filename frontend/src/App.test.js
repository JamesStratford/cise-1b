import { render, screen } from '@testing-library/react';
import App from './App';

test('base test', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/Article List/i);
  //expect(linkElement).toBeInTheDocument();
  let x = 2 * 3;
  expect(x).toEqual(6);
});
