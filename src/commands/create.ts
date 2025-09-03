import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';

export function setupCreateCommand(program: Command): void {
  program
    .command('create <name>')
    .description('Create a new KIMU project in a new folder')
    .option('--no-install', 'Skip npm install')
    .option('--git', 'Initialize a git repository')
    .option('--force', 'Overwrite if folder exists')
    .action(async (name: string, options: any) => {
      const targetDir = path.resolve(process.cwd(), name);
      if (fs.existsSync(targetDir) && !options.force) {
        console.error(`Folder ${name} already exists. Use --force to overwrite.`);
        process.exit(1);
      }
      fs.ensureDirSync(targetDir);
      fs.writeFileSync(path.join(targetDir, 'README.md'), `# ${name}\n\nCreated with KIMU-CLI.`);
      // TODO: Copy minimal files, generate config, etc.
      if (options.git) {
        require('child_process').execSync('git init', { cwd: targetDir });
      }
      console.log(`Project ${name} created.`);
    });
}
