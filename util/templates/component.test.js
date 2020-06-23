module.exports = (componentName) => ({
  content: `
  import React from 'react';
  import { render, screen } from '@testing-library/react';
  
  import ${componentName} from './';
  
  describe('testing component', () => {
    it('should render 🙂', () => {
      render(<${componentName} msg="Hi " />);
  
      expect(screen.getByText('Hi 🙂')).toBeInTheDocument();
    });
  });
`,
  extension: `.test.tsx`,
});
