import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawn } from 'child_process';

export function setupDevCommand(program: Command): void {
  program
    .command('dev')
    .description('Start development server with hot reload')
    .option('-p, --port <port>', 'port to run the server on', '3000')
    .option('-h, --host <host>', 'host to run the server on', 'localhost')
    .option('--open', 'open browser automatically')
    .option('--verbose', 'show detailed server output')
    .action(async (options: any) => {
      const spinner = ora('Starting development server...').start();
      try {
        // Execute npm dev script (vite dev server)
        const devProcess = spawn('npm', ['run', 'dev'], {
          stdio: 'inherit',
          cwd: process.cwd(),
          shell: true,
          env: {
            ...process.env,
            PORT: options.port,
            HOST: options.host,
          },
        });
        
        spinner.succeed(chalk.green('✅ Development server started!'));
        console.log(chalk.cyan(`\n🚀 Server running at: http://${options.host}:${options.port}\n`));
        console.log(chalk.dim('Press Ctrl+C to stop the server\n'));
        
        devProcess.on('error', (error) => {
          console.error(chalk.red(`❌ Server error: ${error.message}`));
          process.exit(1);
        });
        
        devProcess.on('exit', (code) => {
          if (code !== 0 && code !== null) {
            console.error(chalk.red(`❌ Server exited with code ${code}`));
            process.exit(code);
          }
        });
        
        // Handle Ctrl+C
        process.on('SIGINT', () => {
          console.log(chalk.yellow('\n\n⚠️  Stopping development server...'));
          devProcess.kill('SIGINT');
          process.exit(0);
        });
      } catch (error: any) {
        spinner.fail(chalk.red(`❌ Failed to start dev server: ${error.message}`));
        process.exit(1);
      }
    });
}
