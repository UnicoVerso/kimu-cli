#!/usr/bin/env node

/**
 * KIMU-CLI - Official command-line interface for the KIMU framework ecosystem
 * Main CLI entry point
 */

const { Command } = require('commander');
const { CLI_NAME, CLI_VERSION } = require('../dist/config/constants');

// Import command handlers
const { setupVersionCommand } = require('../dist/commands/version');
const { setupInfoCommand } = require('../dist/commands/info');
const { setupHelpCommand } = require('../dist/commands/help');
// TODO: Import other commands as they are implemented
// const { setupCreateCommand } = require('../dist/commands/create');
// const { setupInstallCommand } = require('../dist/commands/install');
// const { setupBuildCommand } = require('../dist/commands/build');
// const { setupListCommand } = require('../dist/commands/list');

const program = new Command();

// Configure main program
program
  .name(CLI_NAME)
  .description('Official command-line interface for the KIMU framework ecosystem')
  .version(CLI_VERSION, '-v, --version', 'display version number')
  .option('--verbose', 'enable verbose output')
  .helpOption('-h, --help', 'display help for command');

// Setup commands
setupVersionCommand(program);
setupInfoCommand(program);
setupHelpCommand(program);

// TODO: Setup other commands as they are implemented
// setupCreateCommand(program);
// setupInstallCommand(program);
// setupBuildCommand(program);
// setupListCommand(program);

// Parse command line arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
