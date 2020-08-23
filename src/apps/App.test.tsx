import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  const testElement = getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
  expect(testElement).toBeInTheDocument();
});
