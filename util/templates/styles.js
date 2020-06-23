module.exports = (componentName) => ({
  name: 'styles',
  content: `import styled from 'styled-components'
  export const ${componentName}Wrapper = styled.div\`\``,
  extension: `.ts`,
});
