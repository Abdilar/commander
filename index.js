const {program} = require('commander')

program
  .option('-e, --error', 'showing error message')
  .option('-v, --version <version>', 'version of file')
  .option('-fn, --file-name <file-name>', 'the file name')

program.parse(process.argv);

const options = program.opts();

if (options.error) {
  console.log('the showing error is enable', options.error);
}

if (options.version) {
  console.log('the version is ', options.version);
}