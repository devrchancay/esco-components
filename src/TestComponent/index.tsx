
import React from "react";

import { TestComponentProps } from "./TestComponent.types";

import { TestComponentWrapper } from './styles';

const TestComponent: React.FC<TestComponentProps> = ({msg}) => {
  return  <TestComponentWrapper>{msg} 🙂</TestComponentWrapper>
}

export default TestComponent;

