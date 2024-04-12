const { program } = require("commander");

program
  .argument("<name>")
  .option("-t, --title <title>", "title to use before name")
  .option("-d, --debug", "Print debug information")
  .action((name, options, command) => {
    if (options.debug) {
      console.log('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title} ` : '';
    console.log(`Thank-you ${title}${name}`);
  });

program.parse();
