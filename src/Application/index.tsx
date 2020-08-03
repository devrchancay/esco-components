import React from 'react';
import { AplicationProps } from './Application.types';
import { ThemeProvider } from 'styled-components';

const Aplication: React.FC<AplicationProps> = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Aplication;