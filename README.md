# gemboot-cli

Standard Tooling for Gem Boot JS Development

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gemboot-cli.svg)](https://npmjs.org/package/gemboot-cli)
[![Downloads/week](https://img.shields.io/npm/dw/gemboot-cli.svg)](https://npmjs.org/package/gemboot-cli)
[![License](https://img.shields.io/npm/l/gemboot-cli.svg)](https://github.com/gem-partij/gemboot-cli/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g gemboot-cli

$ gemboot COMMAND
running command...

$ gemboot (-v|--version|version)
gemboot-cli/1.0.0 linux-x64 node-v10.15.3

$ gemboot --help [COMMAND]
USAGE
  $ gemboot COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`gemboot create`](#gemboot-create)
- [`gemboot help [COMMAND]`](#gemboot-help-command)

## `gemboot create`

Command for creating new project using GemBoot JS Framework

```
  /\/|____  _____  __  __  ____    ___    ___  _____        ____  _      ___  /\/|
 |/\// ___|| ____||  \/  || __ )  / _ \  / _ \|_   _|      / ___|| |    |_ _||/\/
    | |  _ |  _|  | |\/| ||  _ \ | | | || | | | | | _____ | |    | |     | |
    | |_| || |___ | |  | || |_) || |_| || |_| | | ||_____|| |___ | |___  | |
     \____||_____||_|  |_||____/  \___/  \___/  |_|        \____||_____||___|

Welcome to GemBoot CLI

USAGE
  $ gemboot create [PROJECT NAME]

DESCRIPTION
  ...

  A Tools for creating new project using GemBoot JS Framework

  ...

EXAMPLE
  $ gemboot create blog
```

_See code: [src/commands/create.js](https://github.com/gem-partij/gemboot-cli/blob/v1.0.0/src/commands/create.js)_

## `gemboot help [COMMAND]`

display help for gemboot

```
USAGE
  $ gemboot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

<!-- commandsstop -->
