module.exports = (componentName) => ({
  content: `
export interface ${componentName}Props {
  msg: string
}
`,
  extension: `.types.ts`,
});
