import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react'

describe('App', () => {
  test('renders without crashing', () => {
    render(<App/>);
  });

  test('shows results', () => {
    render(<App/>);
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'Foo'}
    });
    fireEvent.click(screen.getByRole('button'));
    screen.getByText(/Toxicity Rating:/);
  });

  test('shows no results when input is empty', () => {
    render(<App/>);
    // Check clicking submit with no input
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(/Toxicity Rating:/)).toBeNull();

    // Should show result when input is not empty
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'Foo'}
    });
    fireEvent.click(screen.getByRole('button'));
    screen.getByText(/Toxicity Rating:/);
    
    // Should show no results element when input is empty again
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: ''}
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText(/Toxicity Rating:/)).toBeNull();
  });
});
