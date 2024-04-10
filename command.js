const commander = require("commander");
const path = require("path");
const fs = require("fs");

const program = new commander.Command();

program.command("tea").action(() => {
  console.log("tea is ready....");
});

program
  .command("create <fileName> [destination]")
  .description("create a new file with the specified file name")
  .alias("cr")
  .action((fileName, destination = ".") => {
    const dir = path.join(__dirname, destination, fileName);
    fs.writeFileSync(dir, "");
    console.log("created a file...");
  });

function startSeverCommand() {
  const server = new commander.Command("server");

  server.command("start").action(() => {
    console.log("started server....");
  });

  server.command("stop").action(() => {
    console.log("stopped server....");
  });

  return server;
}

program.addCommand(startSeverCommand());

program
  .name("connect")
  .argument("<server>", "connect to specified server")
  .argument("[username]", "username to connect to a server", "gust")
  .action((server, username) => {
    console.log("connected to a server...", { server, username });
  });

program.parse();
