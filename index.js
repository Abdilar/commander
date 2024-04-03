const {program} = require('commander')

program.option('--version, -v').option('--file-name, -fn')
program.parse();

const options = program.opts();
console.log({argv: process.argv, args: program.args, version: options.version, fileName: options.fileName})