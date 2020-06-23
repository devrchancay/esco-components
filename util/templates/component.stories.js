module.exports = (componentName) => ({
  content: `import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
  
import TestComponent from './';

<Meta title="Components/TestComponent" component={TestComponent} />

# TestComponent

This is the TestComponent

\`\`\`\jsx
import { TestComponent } from 'my-components';
\`\`\`\

<Preview withSource="open">
  <Story name="Basic">
    <TestComponent msg="Hi " />
  </Story>
</Preview>
  
## Props

<Props of={TestComponent} />   
`,
  extension: `.stories.mdx`,
});
