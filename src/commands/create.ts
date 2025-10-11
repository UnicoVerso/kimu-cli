import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

// test command: node ../bin/kimu.js create test-project --git  --no-install

export function setupCreateCommand(program: Command): void {
  program
    .command('create <name>')
    .description('Create a new KIMU project in a new folder')
    .option('--no-install', 'Skip npm install')
    .option('--git', 'Initialize a git repository')
    .option('--force', 'Overwrite if folder exists')
    .action(async (name: string, options: any) => {
      console.log(`Creating KIMU project: ${name}...`);
      
      const targetDir = path.resolve(process.cwd(), name);
      
      // Check if directory exists
      if (fs.existsSync(targetDir) && !options.force) {
        console.error(
          `Folder ${name} already exists. Use --force to overwrite.`
        );
        process.exit(1);
      }

      try {
        // Remove existing directory if force is used
        if (fs.existsSync(targetDir) && options.force) {
          console.log('Removing existing directory...');
          fs.removeSync(targetDir);
        }

        // Clone kimu-core repository
        console.log('Cloning KIMU-Core from GitHub...');
        execSync(
          `git clone https://github.com/UnicoVerso/kimu-core.git "${targetDir}"`,
          { stdio: 'inherit' }
        );

        // Remove .git directory to clean the project
        const gitDir = path.join(targetDir, '.git');
        if (fs.existsSync(gitDir)) {
          console.log('Cleaning project (removing .git directory)...');
          fs.removeSync(gitDir);
        }

        // Update project name in package.json if it exists
        const packageJsonPath = path.join(targetDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
          const packageJson = fs.readJsonSync(packageJsonPath);
          packageJson.name = name;
          fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
          console.log('Updated package.json with project name.');
        }

        // Install dependencies if not skipped
        if (options.install !== false) {
          console.log('Installing dependencies...');
          execSync('npm install', { cwd: targetDir, stdio: 'inherit' });
        }

        // Initialize new git repository if requested
        if (options.git) {
          console.log('Initializing new git repository...');
          execSync('git init', { cwd: targetDir, stdio: 'inherit' });
          execSync('git add .', { cwd: targetDir, stdio: 'inherit' });
          execSync('git commit -m "Initial commit from KIMU-CLI"', { 
            cwd: targetDir, 
            stdio: 'inherit' 
          });
        }

        console.log(`✅ Project ${name} created successfully!`);
        console.log(`📁 Location: ${targetDir}`);
        console.log(`🚀 Next steps:`);
        console.log(`   cd ${name}`);
        if (options.install === false) {
          console.log(`   npm install`);
        }
        console.log(`   npm start`);

      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ Error creating project: ${errorMessage}`);
        
        // Cleanup on error
        if (fs.existsSync(targetDir)) {
          console.log('Cleaning up incomplete project...');
          fs.removeSync(targetDir);
        }
        
        process.exit(1);
      }
    });
}
