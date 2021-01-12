const chalk = require('chalk');

function debugConsole(message: string): void {
    return console.log(chalk.black.bgGreen("[DEBUG]"), `${chalk.white.bold.bgBlue(message)}`);
};

function logConsole(message: string): void {
    return console.log(chalk.black.bgYellow("[LOG]"), `${chalk.white.bold.bgBlue(message)}`);
};

function errorConsole(message: string): void {
    return console.error(chalk.black.bgRed("[ERROR]"), `${chalk.white.bold.bgBlue(message)}`);
};

function jsonFormattedConsole(message: any): void {
    return console.log(chalk.green.bold("[JSON]"), `${JSON.stringify(message)}`);
}

module.exports = { debugConsole, logConsole, errorConsole, jsonFormattedConsole };