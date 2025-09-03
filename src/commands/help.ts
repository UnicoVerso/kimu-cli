import { Command } from 'commander';

export function setupHelpCommand(program: Command): void {
  program
    .command('help [command]')
    .description('Show help for kimu or a specific command')
    .action((cmd: string | undefined) => {
      if (cmd) {
        program.commands.find(c => c.name() === cmd)?.help();
      } else {
        program.help();
      }
    });
}

// Usage (in main CLI setup):
// import { setupHelpCommand } from './commands/help';
// setupHelpCommand(program);
