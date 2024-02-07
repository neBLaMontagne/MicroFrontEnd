import { describe, it, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import LandingPage from '../sharedComponent/src/components/landingpages/LandingPage';

// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3)
//   });
  
  
  describe('Title of the landing page', () => {
    it('renders the passed title', () => {
      const testTitle = "Remote landing Page ";
      render(<LandingPage title={testTitle} />);
      expect(screen.getByText(testTitle)).toBeInTheDocument();
    });
  });
  
  
//   describe('processTitle Function', () => {
//     it('should format the title correctly', () => {
//       const inputTitle = "Remote landing Page";
//       const expectedOutput = "Remote landing Page";
//       expect(processTitle(inputTitle)).toBe(expectedOutput);
//     });
//   });