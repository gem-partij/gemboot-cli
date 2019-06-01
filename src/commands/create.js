const { Command, flags } = require("@oclif/command");

const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const getBanner = () => {
  return figlet.textSync("~GEMBOOT-CLI~", { horizontalLayout: "fitted" });
};

class CreateCommand extends Command {
  async run() {
    // const {flags} = this.parse(CreateCommand)
    // const name = flags.name || 'world'
    // this.log(`hello ${name} from /home/angger/Projects/NodeJS/@gemboot/cli/src/commands/create.js`)
    this.log(chalk.blue(getBanner()));

    const { argv } = this.parse(CreateCommand);
    if (!argv[0]) {
      await CreateCommand.run(["--help"]);
    }

    const { args } = this.parse(CreateCommand);
    const projectName = args.projectName;
    this.log("Creating project " + projectName + " ...");

    // clone gemboot js repository
    // git clone https://github.com/gem-partij/Gem-Boot-JS [project-name]
    // atau git clone --depth 1 -b <branch> https://github.com/gem-partij/Gem-Boot-JS [project-name]
    if (!shell.which("git")) {
      shell.echo("Sorry, this script requires git");
      shell.exit(1);
    }

    this.log(chalk.yellow("\n[1] Downloading..."));
    const cloning = shell.exec(
      "git clone --depth 1 https://github.com/gem-partij/Gem-Boot-JS " +
        projectName,
      { async: false }
    );
    if (cloning.code === 0) {
      this.log(chalk.green(cloning.stdout));
    } else {
      this.log(chalk.red(cloning.stderr));
      shell.exit(1);
    }

    // cd into that folder
    this.log(chalk.yellow("\n[2] cd " + projectName));
    shell.cd(projectName);

    // remove/delete folder .git
    this.log(chalk.yellow("\n[3] rm -rf .git"));
    shell.rm("-rf", ".git/");

    // npm install
    this.log(chalk.yellow("\n[4] npm install"));
    const npmInstall = shell.exec("npm install", { async: false });
    if (npmInstall.code === 0) {
      this.log(chalk.green(npmInstall.stdout));
    } else {
      this.log(chalk.red(npmInstall.stderr));
      shell.exit(1);
    }

    // copy .env.dev to .env
    this.log(chalk.yellow("\n[5] cp .env.dev .env"));
    shell.cp(".env.dev", ".env");

    this.log("\n");
    this.log(chalk.blue(getBanner()));
    this.log(
      chalk.blue(`\n\n
      Project creation done!

      cd ${projectName} to start coding!
    `)
    );
  }
}

CreateCommand.args = [{ name: "projectName" }];

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
