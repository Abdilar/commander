const { program, Option } = require("commander");

const timeLabel = "command duration";

program
  .option("--profile", "show how long command takes")
  .hook("preAction", (command) => {
    console.log("pre action ....");
    if (command.opts().profile) {
      console.time(timeLabel);
    }
  })
  .hook("postAction", (command) => {
    console.log("post action ....");
    if (command.opts().profile) {
      console.timeEnd(timeLabel);
    }
  });

program.command("user").action(() => {
  console.log("action started....");
});

program
  .option("--trace", "display trace statements for commands")
  .hook("preAction", (thisCommand, actionCommand) => {
    if (thisCommand.opts().trace) {
      console.log(">>>>");
      console.log(
        `About to call action handler for subcommand: ${actionCommand.name()}`
      );
      console.log("arguments: %O", actionCommand.args);
      console.log("options: %o", actionCommand.opts());
      console.log("<<<<");
    }
  });

program.parseAsync().then(() => {});
