import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawnSync } from 'child_process';

export function setupBuildCommand(program: Command): void {
  program
    .command('build')
    .description('Build your KIMU project for production')
    .option('--dev', 'build in development mode')
    .option('--local', 'build for local testing')
    .option('--prod', 'build for production (default)')
    .option('--watch', 'watch for changes and rebuild')
    .option('--verbose', 'show detailed build output')
    .action(async (options: any) => {
      const spinner = ora('Building KIMU project...').start();
      try {
        let buildCommand = 'build';
        
        if (options.dev) {
          buildCommand = 'build:dev';
        } else if (options.local) {
          buildCommand = 'build:local';
        } else if (options.prod) {
          buildCommand = 'build:prod';
        }
        
        // Execute npm build script
        const result = spawnSync('npm', ['run', buildCommand], {
          stdio: options.verbose ? 'inherit' : 'pipe',
          cwd: process.cwd(),
          shell: true,
        });
        
        if (result.error) {
          throw new Error(`Failed to execute build: ${result.error.message}`);
        }
        
        if (result.status !== 0) {
          const errorOutput = result.stderr?.toString() || result.stdout?.toString() || '';
          throw new Error(`Build failed with exit code ${result.status}\n${errorOutput}`);
        }
        
        spinner.succeed(chalk.green('✅ Build completed successfully!'));
        console.log(chalk.cyan('\n📦 Build output in: dist/\n'));
      } catch (error: any) {
        spinner.fail(chalk.red(`❌ Build failed: ${error.message}`));
        process.exit(1);
      }
    });
}
