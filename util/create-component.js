const chalk = require('chalk');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];
const log = console.log;

if (!componentName) {
  log(chalk.red(`Please supply a valid component name`));
  process.exit(1);
}

chalk.green(`Creating Component Templates with name: ${componentName}`);

const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  log(chalk.red(`Component ${componentName} already exists.`));
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  const filename = `${componentDirectory}/${
    template.name ? template.name : componentName
  }${template.extension}`;

  fs.writeFileSync(filename, template.content);
  log(chalk.green(`created file ${filename}`));
});

fs.appendFileSync(
  `${__dirname}/../src/index.ts`,
  `export { default as ${componentName} } from './${componentName}';`
);

log(
  chalk.green(`Successfully created component under: ${componentDirectory} 🎉`)
);
log(chalk.green('Happy Hacking 👾'));
