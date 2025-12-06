import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { installModuleOrExtension } from '../utils/module-installer';

export function setupInstallCommand(program: Command): void {
  const install = program
    .command('install')
    .alias('i')
    .description('Install modules or extensions for your KIMU project');

  // kimu install module <name>
  install
    .command('module <name>')
    .alias('m')
    .description('Install a KIMU module from the registry')
    .option('--save-dev', 'install as development dependency')
    .option('--registry <url>', 'use custom registry URL')
    .option('--version <version>', 'install specific version')
    .option('--force', 'force reinstall if already installed')
    .option('--verbose', 'show detailed installation progress')
    .action(async (name: string, options: any) => {
      const spinner = ora(`Installing module ${name}...`).start();
      try {
        await installModuleOrExtension(name, { ...options, type: 'module' });
        spinner.succeed(
          chalk.green(`✅ Module ${name} installed successfully!`)
        );
      } catch (error: any) {
        spinner.fail(
          chalk.red(`❌ Failed to install module ${name}: ${error.message}`)
        );
        process.exit(1);
      }
    });

  // kimu install extension <name>
  install
    .command('extension <name>')
    .alias('e')
    .description('Install a KIMU extension from the registry')
    .option('--save-dev', 'install as development dependency')
    .option('--registry <url>', 'use custom registry URL')
    .option('--version <version>', 'install specific version')
    .option('--force', 'force reinstall if already installed')
    .option('--verbose', 'show detailed installation progress')
    .action(async (name: string, options: any) => {
      const spinner = ora(`Installing extension ${name}...`).start();
      try {
        await installModuleOrExtension(name, { ...options, type: 'extension' });
        spinner.succeed(
          chalk.green(`✅ Extension ${name} installed successfully!`)
        );
      } catch (error: any) {
        spinner.fail(
          chalk.red(`❌ Failed to install extension ${name}: ${error.message}`)
        );
        process.exit(1);
      }
    });
}
