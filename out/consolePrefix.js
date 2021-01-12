"use strict";
const chalk = require('chalk');
function debugConsole(message) {
    return console.log(chalk.black.bgGreen("[DEBUG]"), `${chalk.white.bold.bgBlue(message)}`);
}
;
function logConsole(message) {
    return console.log(chalk.black.bgYellow("[LOG]"), `${chalk.white.bold.bgBlue(message)}`);
}
;
function errorConsole(message) {
    return console.error(chalk.black.bgRed("[ERROR]"), `${chalk.white.bold.bgBlue(message)}`);
}
;
function jsonFormattedConsole(message) {
    return console.log(chalk.green.bold("[JSON]"), `${JSON.stringify(message)}`);
}
module.exports = { debugConsole, logConsole, errorConsole, jsonFormattedConsole };
