import { describe, it, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import LandingPage from '../sharedComponent/src/components/landingpages/LandingPage';
import "@testing-library/jest-dom/extend-expect";

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

describe('adds 1 + 2 to equal 3', () => {
  it('calcul', () => {
    expect(1 + 2).toBe(3);
  });
});

// describe('Title of the landing page', () => {
//   it('renders the passed title', () => {
//     const testTitle = "Host landing Page";
//     render(<LandingPage title="Host landing Page" />);
//     const titleElement = screen.getByText(testTitle);
//     expect(screen.getByText(testTitle)).toBeInTheDocument();
// });
// });


