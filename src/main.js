import chalk from 'chalk';
import fs from 'fs';
import ncp from 'ncp';
import path from 'path';
import { promisify } from 'util';
import execa from 'execa';
import Listr from 'listr';
import { projectInstall } from 'pkg-install';
import boxen from 'boxen';

const copy = promisify(ncp);
const successBox = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green"
}

const copyCoreFiles = async (options) => {
    const packageJsonPath = path.resolve(path.dirname(__filename), '../core', 'package.json');
    const raw = fs.readFileSync(packageJsonPath);
    const packageJson = JSON.parse(raw);
    packageJson.name = options.directory;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    const { source, target } = options;
    return copy(source, target, { clobber: false });
};

const initGit = async (options) => {
    const result = await execa('git', ['init'], {
        cwd: options.target
    });
    if (result.failed) return Promise.reject(new Error("Failed to initialize git"));
    return;
}

export const createProject = async (options) => {
    const source = path.resolve(path.dirname(__filename), '../core');
    const target = options.directory === "." ? process.cwd() : `${process.cwd()}\\${options.directory}`;
    options = {
        ...options,
        source,
        target
    };

    const tasks = new Listr([
        {
            title: 'Generating starter code...',
            task: () => copyCoreFiles(options),
        },
        {
            title: 'Initializing git...',
            task: () => initGit(options),
            enabled: () => options.git,
        },
        {
            title: 'Installing dependencies. It will take few minutes',
            task: () => projectInstall({ cwd: options.target })
        },
    ]);

    // await tasks.run();
    console.log("%s: Project is ready.", chalk.green.bold("DONE"));
    console.log(`

    You can try below commands in your root directory -

    1. ${chalk.green("npm start")} --> To run project locally at ${chalk.yellow.underline("http://localhost:3000")}.

    2. ${chalk.green("npm build")} --> Create production build to ${chalk.yellow("dist")} folder.

    3. ${chalk.green("npm test")} --> Run all the test cases.
    `);
    console.log(boxen(chalk.green(`Happy Coding with ${options.directory}!!`), successBox));
    return true;
};
