import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import * as fs from 'fs-extra';
import * as path from 'path';
import { KimuRegistry } from '../utils/registry';

async function getInstalledPackages(): Promise<{
  modules: string[];
  extensions: string[];
}> {
  const modules: string[] = [];
  const extensions: string[] = [];

  try {
    // Read modules from modules-manifest.json
    const modulesManifestPath = path.join(
      process.cwd(),
      'src',
      'modules',
      'modules-manifest.json'
    );
    if (await fs.pathExists(modulesManifestPath)) {
      const modulesManifest = await fs.readJson(modulesManifestPath);
      modules.push(
        ...(modulesManifest.installedModules?.map((mod: any) => mod.name) || [])
      );
    }

    // Read extensions from extensions-manifest.json
    const extensionsManifestPath = path.join(
      process.cwd(),
      'src',
      'extensions',
      'extensions-manifest.json'
    );
    if (await fs.pathExists(extensionsManifestPath)) {
      const extensionsManifest = await fs.readJson(extensionsManifestPath);
      extensions.push(
        ...(extensionsManifest.installedExtensions?.map((ext: any) => ext.tag || ext.name) || [])
      );
    }
  } catch (error) {
    // Ignore errors, return empty arrays
  }

  return { modules, extensions };
}

export function setupListCommand(program: Command): void {
  const list = program
    .command('list')
    .alias('l')
    .description('List available or installed modules and extensions');

  // kimu list modules
  list
    .command('modules')
    .alias('m')
    .description('List available modules from the registry')
    .option('--verbose', 'show detailed information')
    .action(async (options: any) => {
      const spinner = ora('Fetching available modules...').start();
      try {
        const registry = KimuRegistry.getInstance();
        const modules = await registry.listModules();
        const installed = await getInstalledPackages();
        spinner.succeed(chalk.green(`✅ Found ${modules.length} modules`));
        console.log('\n📦 Available Modules:\n');
        modules.forEach((mod: any) => {
          const isInstalled = installed.modules.includes(mod.name);
          const statusIcon = isInstalled ? chalk.green('✓') : chalk.gray('○');
          const statusText = isInstalled ? chalk.green('[installed]') : '';
          console.log(
            `  ${statusIcon} ${chalk.cyan(mod.name)} ${chalk.gray(`v${mod.version}`)} ${statusText}`
          );
          if (options.verbose) {
            console.log(`    ${chalk.dim(mod.description)}`);
          }
        });
        console.log('');
      } catch (error: any) {
        spinner.fail(chalk.red(`❌ Failed to fetch modules: ${error.message}`));
        process.exit(1);
      }
    });

  // kimu list extensions
  list
    .command('extensions')
    .alias('e')
    .description('List available extensions from the registry')
    .option('--verbose', 'show detailed information')
    .action(async (options: any) => {
      const spinner = ora('Fetching available extensions...').start();
      try {
        const registry = KimuRegistry.getInstance();
        const extensions = await registry.listExtensions();
        const installed = await getInstalledPackages();
        spinner.succeed(
          chalk.green(`✅ Found ${extensions.length} extensions`)
        );
        console.log('\n🧩 Available Extensions:\n');
        extensions.forEach((ext: any) => {
          const isInstalled = installed.extensions.includes(ext.name);
          const statusIcon = isInstalled ? chalk.green('✓') : chalk.gray('○');
          const statusText = isInstalled ? chalk.green('[installed]') : '';
          console.log(
            `  ${statusIcon} ${chalk.cyan(ext.name)} ${chalk.gray(`v${ext.version}`)} ${statusText}`
          );
          if (options.verbose) {
            console.log(`    ${chalk.dim(ext.description)}`);
          }
        });
        console.log('');
      } catch (error: any) {
        spinner.fail(
          chalk.red(`❌ Failed to fetch extensions: ${error.message}`)
        );
        process.exit(1);
      }
    });

  // kimu list installed
  list
    .command('installed')
    .alias('i')
    .description('List installed modules and extensions in your project')
    .option('--verbose', 'show detailed information')
    .action(async () => {
      const spinner = ora('Checking installed packages...').start();
      try {
        const installed = await getInstalledPackages();
        const total = installed.modules.length + installed.extensions.length;

        if (total === 0) {
          spinner.info(chalk.yellow('⚠️  No installed packages detected'));
          console.log('\n📋 Installed Packages:\n');
          console.log('  (No installed packages found in kimu.config.json)');
          console.log('');
          return;
        }

        spinner.succeed(chalk.green(`✅ Found ${total} installed packages`));
        console.log('\n📋 Installed Packages:\n');

        if (installed.modules.length > 0) {
          console.log(chalk.bold('  Modules:'));
          installed.modules.forEach((name: string) => {
            console.log(`    ${chalk.green('✓')} ${chalk.cyan(name)}`);
          });
          console.log('');
        }

        if (installed.extensions.length > 0) {
          console.log(chalk.bold('  Extensions:'));
          installed.extensions.forEach((name: string) => {
            console.log(`    ${chalk.green('✓')} ${chalk.cyan(name)}`);
          });
          console.log('');
        }
      } catch (error: any) {
        spinner.fail(
          chalk.red(`❌ Failed to check installed packages: ${error.message}`)
        );
        process.exit(1);
      }
    });
}
