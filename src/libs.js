import path from 'path';
import chalk from 'chalk';

export const helpMsg = `
    1. How to use?

        create-react-saga <project-name> ${chalk.yellow("[options]")}
        - You can use (.) operator instead of ${chalk.blue("<project-name>")}. It will copy starter file to the current directory.

    2. What options are available?

        ${chalk.yellow("[Project name]*")}    Your project name.

        ${chalk.yellow("[Template]")}         Can be JavaScript or TypeScript.
    
        ${chalk.yellow("--git, -g")}          Initialize git or not. Default is false.
 
        ${chalk.yellow("--help, -h")}         To list down all the available options.

        ${chalk.yellow("--version, -v")}      Display the version of create-react-saga CLI.
`

/**
 * @param {array} listOfDir - List of directories to join 
 * @returns {string} - path
 */
export const getPath = listOfDir => path.resolve(path.dirname(__filename), ...listOfDir);

export const TEMPLATES = {
    js: 'JavaScript',
    ts: 'TypeScript'
}

export const wrongTemplateMsg = `
🟡 Provided template is invalid. create-react-saga only supports${chalk.green('js')} or ${chalk.green('ts')}.
🟢 Proceeding with default${chalk.green('js')}.
`;