import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Import your main App component

// Example of a test suite
describe('App component', () => {
  // Example of a test case
  test('renders app component with hello text', () => {
    render(<App />);
    // Use testing-library queries to assert on the rendered component
    expect(screen.getByText(/Product App/i)).toBeInTheDocument();
  });

  // Add more test cases as needed
});
