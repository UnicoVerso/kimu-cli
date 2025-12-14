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
const { setupCreateCommand } = require('../dist/commands/create');
const { setupNewCommand } = require('../dist/commands/new');
const { setupInstallCommand } = require('../dist/commands/install');
const { setupListCommand } = require('../dist/commands/list');
const { setupRemoveCommand } = require('../dist/commands/remove');
const { setupBuildCommand } = require('../dist/commands/build');
const { setupDevCommand } = require('../dist/commands/dev');
const { setupServeCommand } = require('../dist/commands/serve');
const { setupDoctorCommand } = require('../dist/commands/doctor');

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
setupCreateCommand(program);
setupNewCommand(program);
setupInstallCommand(program);
setupListCommand(program);
setupRemoveCommand(program);
setupBuildCommand(program);
setupDevCommand(program);
setupServeCommand(program);
setupDoctorCommand(program);

// Parse command line arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
