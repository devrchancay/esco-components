
  import React from 'react';
  import { render, screen } from '@testing-library/react';
  
  import TestComponent from './';
  
  describe('testing component', () => {
    it('should render 🙂', () => {
      render(<TestComponent msg="Hi " />);
  
      expect(screen.getByText('Hi 🙂')).toBeInTheDocument();
    });
  });
