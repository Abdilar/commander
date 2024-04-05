const {Command, InvalidArgumentError} = require('commander')

const program = new Command();

function parseInt(value, previousValue) {
  const parsedValue = Number(value);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  return parsedValue;
}

program
  .option('-n, --number <number>', 'parsed to integer', parseInt);

program.parse();

const options = program.opts();

if (options.number) {
  console.log('the number is ', options.number);
}