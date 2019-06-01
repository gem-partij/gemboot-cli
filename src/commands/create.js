const { Command, flags } = require("@oclif/command");

const chalk = require("chalk");
const figlet = require("figlet");

class CreateCommand extends Command {
  async run() {
    // const {flags} = this.parse(CreateCommand)
    // const name = flags.name || 'world'
    // this.log(`hello ${name} from /home/angger/Projects/NodeJS/@gemboot/cli/src/commands/create.js`)
    this.log(
      chalk.blue(
        figlet.textSync("~GEMBOOT-CLI~", { horizontalLayout: "fitted" })
      )
    );

    await CreateCommand.run(["--help"]);
  }
}

CreateCommand.description = `Welcome to GemBoot CLI
...

A Tools for creating new project using GemBoot JS Framework

...
`;

CreateCommand.usage = "create [PROJECT NAME]";

// CreateCommand.flags = {
//   name: flags.string({ char: "n", description: "name to print" })
// };

CreateCommand.examples = ["$ gemboot create blog"];

module.exports = CreateCommand;
