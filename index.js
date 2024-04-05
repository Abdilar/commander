const {program} = require('commander')

program
  .option('-e, --error', 'showing error message')
  .option('-nv, --new-version <version>', 'changing version of file')
  .option('-fn, --file-name <file-name>', 'the file name')
  .option('-p | --port <number>', 'port number', '8080')
  .option('--no-log', 'remove logs')
  .option('-c, --color [value]', 'add color with optional value')
  // NOTE: this option is necessary on commander:required script
  // .requiredOption('-f, --force', 'the force flag is required')
  .option('-l, --letters <string...>', 'collection of characters')

program.parse(process.argv);

const options = program.opts();

if (options.error) {
  console.log('the showing error is enable', options.error);
}

if (options.newVersion) {
  console.log('the new version is ', options.newVersion);
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

if (options.letters) {
  console.log('the letters are ', {letters: options.letters});
}