import { test, expect } from 'vitest';

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { id: 1, name: 'Pikachu', sprites: { front_default: 'pikachu.jpg' } } })),
}));

describe('Host', () => {
  it('renders loading state and fetches Pokemon data', async () => {
    render(<App />);

    expect(screen.getByText('Loading Pokemon data...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Pokemon Name: Pikachu')).toBeInTheDocument();
      expect(screen.getByAltText('Pikachu')).toBeInTheDocument();
    });
  });

});
