const {program, Option} = require('commander')

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

program.version('1.1.21', '-v, --version', 'output the current version')

program
  .addOption(new Option('-s, --secret', 'secret flag that is a boolean').hideHelp())
  .addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
  .addOption(new Option('-g, --glass <size>', 'glass size').choices(['small', 'medium', 'large']))
  .addOption(new Option('-b, --bucket-name <name>', 'bucket name').env('BUCKET'))
  .addOption(new Option('-ds, --disable-server').conflicts(['bucketName']))
  .addOption(new Option('-d, --donate').preset(35).argParser(parseFloat))

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

if (options.timeout) {
  console.log('the timeout is ', options.timeout);
}

if (options.glass) {
  console.log('the glass size is ', options.glass);
}

if (options.bucketName) {
  console.log('the bucket name is ', options.bucketName);
}

if (options.disableServer) {
  console.log('the disable server is on', options.disableServer);
}

if (options.donate) {
  console.log('the donate is ', options.donate);
}