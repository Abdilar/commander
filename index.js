const {program} = require('commander')

program
  .option('-e, --error', 'showing error message')
  .option('-v, --version <version>', 'version of file')
  .option('-fn, --file-name <file-name>', 'the file name')
  .option('-p | --port <number>', 'port number', '8080')
  .option('--no-log', 'remove logs')
  .option('-c, --color [value]', 'add color with optional value')
  // NOTE: this option is necessary on commander:required script
  .requiredOption('-f, --force', 'the force flag is required')

program.parse(process.argv);

const options = program.opts();

if (options.error) {
  console.log('the showing error is enable', options.error);
}

if (options.version) {
  console.log('the version is ', options.version);
}

console.log('The port is ', options.port);

if (!options.log) {
  console.log('The logs removed ', options.log);
}

if (options.color === undefined) {
  console.log('no color');
} else if (options.color === true) {
  console.log('the color is required');
} else {
  console.log('the color is ', options.color);
}