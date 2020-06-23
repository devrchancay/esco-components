module.exports = (componentName) => ({
  name: `index`,
  content: `
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import { ${componentName}Wrapper } from './styles';

const ${componentName}: React.FC<${componentName}Props> = ({msg}) => {
  return  <${componentName}Wrapper>{msg} 🙂</${componentName}Wrapper>
}

export default ${componentName};

`,
  extension: `.tsx`,
});
