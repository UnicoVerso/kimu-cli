import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs-extra';

export function setupServeCommand(program: Command): void {
  program
    .command('serve')
    .description('Serve the built KIMU project')
    .option('-p, --port <port>', 'port to run the server on', '8080')
    .option('-h, --host <host>', 'host to run the server on', 'localhost')
    .option('--open', 'open browser automatically')
    .action(async (options: any) => {
      const spinner = ora('Starting production server...').start();
      try {
        const distPath = path.join(process.cwd(), 'dist');
        
        if (!fs.existsSync(distPath)) {
          throw new Error(
            'Build directory not found. Please run "kimu build" first.'
          );
        }
        
        // Use vite preview or simple http server
        const serveProcess = spawn(
          'npx',
          ['vite', 'preview', '--port', options.port, '--host', options.host],
          {
            stdio: 'inherit',
            cwd: process.cwd(),
            shell: true,
          }
        );
        
        spinner.succeed(chalk.green('✅ Production server started!'));
        console.log(chalk.cyan(`\n🚀 Server running at: http://${options.host}:${options.port}\n`));
        console.log(chalk.dim('Press Ctrl+C to stop the server\n'));
        
        serveProcess.on('error', (error) => {
          console.error(chalk.red(`❌ Server error: ${error.message}`));
          process.exit(1);
        });
        
        serveProcess.on('exit', (code) => {
          if (code !== 0 && code !== null) {
            console.error(chalk.red(`❌ Server exited with code ${code}`));
            process.exit(code);
          }
        });
        
        // Handle Ctrl+C
        process.on('SIGINT', () => {
          console.log(chalk.yellow('\n\n⚠️  Stopping server...'));
          serveProcess.kill('SIGINT');
          process.exit(0);
        });
      } catch (error: any) {
        spinner.fail(chalk.red(`❌ Failed to start server: ${error.message}`));
        process.exit(1);
      }
    });
}
