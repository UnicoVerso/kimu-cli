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

        // Step 1: Create project folder
        fs.mkdirSync(targetDir);
        process.chdir(targetDir);

        // Step 2: npm init
        console.log('Initializing npm project...');
        execSync('npm init -y', { stdio: 'inherit' });

        // Step 3: Install kimu-core
        console.log('Installing kimu-core...');
        execSync('npm install kimu-core', { stdio: 'inherit' });

        // Step 4: Copy ALL files from kimu-core except node_modules, dist, .git, .env, etc.
        const kimuCorePath = path.join(targetDir, 'node_modules', 'kimu-core');
        if (!fs.existsSync(kimuCorePath)) {
          throw new Error('kimu-core not found in node_modules.');
        }
        // List of folders/files to exclude
        const exclude = [
          'node_modules',
          'dist',
          '.git',
          '.env',
          'package-lock.json',
        ];
        const items = fs.readdirSync(kimuCorePath);
        for (const item of items) {
          if (exclude.includes(item)) continue;
          const srcPath = path.join(kimuCorePath, item);
          const destPath = path.join(targetDir, item);
          fs.copySync(srcPath, destPath);
        }

        // Step 5: Remove node_modules/kimu-core (optional)
        if (fs.existsSync(kimuCorePath)) {
          fs.removeSync(kimuCorePath);
        }

        // Step 6: Install all dependencies
        if (options.install !== false) {
          console.log('Installing all dependencies...');
          execSync('npm install', { stdio: 'inherit' });
        }

        // Step 6.5: Generate kimu-build-config
        console.log('Generating KIMU build configuration...');
        execSync('npm run generate-config:dev', { stdio: 'inherit' });

        // Step 7: Update package.json (only name)
        const packageJsonPath = path.join(targetDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
          const packageJson = fs.readJsonSync(packageJsonPath);
          packageJson.name = name;
          fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
          console.log('Updated package.json with project name.');
        }

        // Step 8: Initialize git if requested
        if (options.git) {
          console.log('Initializing new git repository...');
          execSync('git init', { stdio: 'inherit' });
          execSync('git add .', { stdio: 'inherit' });
          execSync('git commit -m "Initial commit from KIMU-CLI"', {
            stdio: 'inherit',
          });
        }

        // Step 9: Final message
        console.log(`✅ Project ${name} created successfully!`);
        console.log(`📁 Location: ${targetDir}`);
        console.log(`🚀 Next steps:`);
        console.log(`   cd ${name}`);
        if (options.install === false) {
          console.log(`   npm install`);
        }
        console.log(`   npm run dev`);
        console.log(
          '📖 Documentation: https://github.com/UnicoVerso/kimu-core'
        );
        console.log('🔗 NPM package: https://www.npmjs.com/package/kimu-core');
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
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
