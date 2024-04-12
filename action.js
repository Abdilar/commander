const { program } = require("commander");

program
  .argument("<name>")
  .option("-t, --title <title>", "title to use before name")
  .option("-d, --debug", "Print debug information")
  .action((name, options, command) => {
    if (options.debug) {
      console.log("Called %s with options %o", command.name(), options);
    }
    const title = options.title ? `${options.title} ` : "";
    console.log(`Thank-you ${title}${name}`);
  });

program
  .command("server")
  .argument("<script>")
  .option("-p, --port <port>", "the port of server")
  .action(function () {
    console.error("Run script %s on port %s", this.args[0], this.opts().port);
  });

program
  .name("sakit")
  .version("1.0.0")
  .description("The SAkit css package")
  .command("install [name]", "install one or more packages")
  .alias("i")
  .command("search [query]", "search with optional query")
  .alias("s")
  .command("update", "update installed packages", {
    executableFile: "myUpdateSubCommand",
  })
  .alias("u")
  .action((name, options, command) => {
    console.log({ name, options, command });
  });

program.parse();
