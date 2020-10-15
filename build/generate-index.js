/* eslint-env node */
/* eslint-disable no-console */
require('@babel/register');

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const kebabToPascal = require('../source/kebab-to-pascal').default;

function create(directory, outputFileName) {
  if (typeof directory !== 'string') {
    console.log(
      `${chalk.dim('[UTILS]')} 👻  ${chalk.red(
        'Missing first argument: `directory`'
      )} ${chalk.blueBright(outputFileName)}`
    );

    process.exit(1);
  }

  if (typeof outputFileName !== 'string') {
    console.log(
      `${chalk.dim('[UTILS]')} 👻  ${chalk.red(
        'Missing second argument: `outputFileName`'
      )}`
    );

    process.exit(1);
  }

  const disclaimers = [
    '// NOTE: Do not edit this file. It is ✨automagically✨ created during the build process.',
    `// NOTE: Generated at ${new Date(Date.now()).toUTCString()}.`,
  ];

  console.log(
    `${chalk.dim('[UTILS]')} ✏️  Writing ${chalk.blueBright(outputFileName)}`
  );

  fs.readdir(directory, (err, files) => {
    const jsFiles = files
      .filter((fileName) => fileName.endsWith('.js') && fileName !== 'index.js')
      .reduce(
        (accumulator, fileName) =>
          Object.assign({}, accumulator, {
            [kebabToPascal(fileName.slice(0, -3))]: fileName.slice(0, -3),
          }),
        {}
      );

    const keys = Object.keys(jsFiles);

    const importStatements = keys.reduce((accumulator, key) => {
      accumulator += `import ${key} from './${jsFiles[key]}';\n`;
      return accumulator;
    }, '');

    const returnObjectContents = keys.reduce(
      (accumulator, key, currentIndex) => {
        const separator = currentIndex < keys.length - 1 ? ',' : '';
        accumulator += `  ${key}${separator}\n`;
        return accumulator;
      },
      ''
    );

    const exportStatement = `export {\n${returnObjectContents}};`;

    const fileContent = `${disclaimers.join('\n')}\n${importStatements.replace(
      /\\/g,
      '/'
    )}\n${exportStatement}\n`;

    fs.writeFile(
      path.join(__dirname, '..', 'source', outputFileName),
      fileContent,
      {},
      (err) => {
        if (!err) {
          console.log(
            `${chalk.dim('[UTILS]')} 😊  ${chalk.blueBright(
              outputFileName
            )} written`
          );
        } else {
          console.log(
            `${chalk.dim('[UTILS]')} 👻  ${chalk.red(
              'Error writing'
            )} ${chalk.blueBright(outputFileName)}`,
            err
          );

          process.exit(1);
        }
      }
    );
  });
}

create(path.join(__dirname, '..', 'source'), 'index.js');
