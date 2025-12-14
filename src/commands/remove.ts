import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawnSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs-extra';

/**
 * Find kimu-core installation path
 */
function findKimuCorePath(): string | null {
  const cwd = process.cwd();
  
  // Check in node_modules
  const nodeModulesPath = path.join(cwd, 'node_modules', 'kimu-core');
  if (fs.existsSync(nodeModulesPath)) {
    return nodeModulesPath;
  }
  
  // Check in current directory
  if (fs.existsSync(path.join(cwd, 'scripts', 'remove-module.js'))) {
    return cwd;
  }
  
  // Check parent directories
  let currentDir = cwd;
  for (let i = 0; i < 3; i++) {
    const parentDir = path.dirname(currentDir);
    const kimuCorePath = path.join(parentDir, 'kimu-core');
    if (fs.existsSync(path.join(kimuCorePath, 'scripts', 'remove-module.js'))) {
      return kimuCorePath;
    }
    currentDir = parentDir;
  }
  
  return null;
}

export function setupRemoveCommand(program: Command): void {
  const remove = program
    .command('remove')
    .alias('rm')
    .description('Remove installed modules or extensions from your KIMU project');

  // kimu remove module <name>
  remove
    .command('module <name>')
    .alias('m')
    .description('Remove an installed KIMU module')
    .option('--verbose', 'show detailed removal progress')
    .action(async (name: string, options: any) => {
      const spinner = ora(`Removing module ${name}...`).start();
      try {
        const kimuCorePath = findKimuCorePath();
        
        if (!kimuCorePath) {
          throw new Error(
            'kimu-core not found. Please ensure kimu-core is installed as a dependency or accessible in your workspace.'
          );
        }
        
        const scriptPath = path.join(kimuCorePath, 'scripts', 'remove-module.js');
        
        if (!fs.existsSync(scriptPath)) {
          throw new Error(
            `remove-module.js script not found in kimu-core at: ${scriptPath}`
          );
        }
        
        if (options.verbose) {
          spinner.info(`Using kimu-core at: ${kimuCorePath}`);
          spinner.start(`Removing module ${name}...`);
        }
        
        // Execute kimu-core's remove script
        const result = spawnSync('node', [scriptPath, name], {
          stdio: 'inherit',
          cwd: process.cwd(),
        });
        
        if (result.error) {
          throw new Error(`Failed to execute remove script: ${result.error.message}`);
        }
        
        if (result.status !== 0) {
          throw new Error(`Module removal failed with exit code ${result.status}`);
        }
        
        spinner.succeed(chalk.green(`✅ Module ${name} removed successfully!`));
      } catch (error: any) {
        spinner.fail(chalk.red(`❌ Failed to remove module ${name}: ${error.message}`));
        process.exit(1);
      }
    });

  // kimu remove extension <name>
  remove
    .command('extension <name>')
    .alias('e')
    .description('Remove an installed KIMU extension')
    .option('--verbose', 'show detailed removal progress')
    .action(async (name: string) => {
      const spinner = ora(`Removing extension ${name}...`).start();
      try {
        // TODO: Implement extension removal when kimu-core provides the script
        spinner.fail(
          chalk.yellow(
            `⚠️  Extension removal is not yet implemented. Please remove extensions manually or wait for future updates.`
          )
        );
      } catch (error: any) {
        spinner.fail(chalk.red(`❌ Failed to remove extension ${name}: ${error.message}`));
        process.exit(1);
      }
    });
}
