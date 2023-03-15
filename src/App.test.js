/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
