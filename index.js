const {program} = require('commander')

program
  .option('--version, -v', 'version of file')
  .option('--file-name, -fn', 'the file name')
program.parse();

const options = program.opts();
console.log({argv: process.argv, args: program.args, version: options.version, fileName: options.fileName, options})