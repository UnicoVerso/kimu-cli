/**
 * New command implementation - Create components from templates
 * Template-based generator system for extensibility
 */

import { Command } from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { Logger } from '../utils/logger';
import { NewOptions } from '../types/cli-types';
import { KIMU_CONFIG_FILE } from '../config/constants';

/**
 * Generator configuration structure
 */
interface GeneratorConfig {
  name: string;
  description: string;
  targetPath: string;
  files: {
    template: string;
    output: string;
  }[];
  registration?: {
    enabled: boolean;
    file: string;
    type: 'array' | 'object';
    path?: string;
    entry?: any;
  };
  postCreate?: string[];
}

/**
 * Get the templates directory path
 */
function getTemplatesDir(): string {
  // In development, templates are in the project root
  // When published, they're in the package root
  const devPath = path.join(__dirname, '../../templates/generators');
  const prodPath = path.join(__dirname, '../templates/generators');

  if (fs.existsSync(devPath)) {
    return devPath;
  } else if (fs.existsSync(prodPath)) {
    return prodPath;
  } else {
    throw new Error('Templates directory not found');
  }
}

/**
 * Discover available generator types
 */
function discoverGenerators(): string[] {
  const templatesDir = getTemplatesDir();

  if (!fs.existsSync(templatesDir)) {
    return [];
  }

  const entries = fs.readdirSync(templatesDir, { withFileTypes: true });

  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name =>
      fs.existsSync(path.join(templatesDir, name, 'config.json'))
    );
}

/**
 * Load generator configuration
 */
function loadGeneratorConfig(type: string): GeneratorConfig {
  const templatesDir = getTemplatesDir();
  const configPath = path.join(templatesDir, type, 'config.json');

  if (!fs.existsSync(configPath)) {
    throw new Error(`Generator config not found: ${configPath}`);
  }

  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

/**
 * Convert kebab-case to PascalCase
 */
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Convert kebab-case to camelCase
 */
function toCamelCase(str: string): string {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Convert kebab-case to Title Case
 */
function toTitleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Convert kebab-case to snake_case
 */
function toSnakeCase(str: string): string {
  return str.replace(/-/g, '_');
}

/**
 * Replace placeholders in text
 */
function replacePlaceholders(
  text: string,
  name: string,
  targetPath: string
): string {
  const replacements = {
    '{{name}}': name,
    '{{className}}': toPascalCase(name),
    '{{kebabName}}': name,
    '{{camelName}}': toCamelCase(name),
    '{{titleName}}': toTitleCase(name),
    '{{snakeName}}': toSnakeCase(name),
    '{{targetPath}}': targetPath,
  };

  let result = text;
  for (const [placeholder, value] of Object.entries(replacements)) {
    result = result.replace(
      new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      value
    );
  }

  return result;
}

/**
 * Register component in manifest or config
 */
async function registerComponent(
  config: GeneratorConfig,
  name: string,
  targetPath: string,
  logger: Logger
): Promise<void> {
  if (!config.registration || !config.registration.enabled) {
    return;
  }

  const { file, type, path: configPath, entry } = config.registration;

  if (!fs.existsSync(file)) {
    logger.warn(`Registration file not found: ${file}. Skipping registration.`);
    return;
  }

  const content = JSON.parse(fs.readFileSync(file, 'utf-8'));

  if (type === 'array') {
    // Add to array (e.g., extension-manifest.json)
    const entryWithPlaceholders = JSON.stringify(entry);
    const finalEntry = JSON.parse(
      replacePlaceholders(entryWithPlaceholders, name, targetPath)
    );
    content.push(finalEntry);
  } else if (type === 'object' && configPath) {
    // Add to nested object (e.g., kimu.config.json modules.installed)
    const pathParts = configPath.split('.');
    let current: any = content;

    for (let i = 0; i < pathParts.length - 1; i++) {
      const key = pathParts[i];
      if (key && !current[key]) {
        current[key] = {};
      }
      if (key) {
        current = current[key];
      }
    }

    const lastKey = pathParts[pathParts.length - 1];
    if (lastKey && !Array.isArray(current[lastKey])) {
      current[lastKey] = [];
    }

    if (lastKey) {
      current[lastKey].push(name);
    }
  }

  fs.writeFileSync(file, JSON.stringify(content, null, 2) + '\n');
  logger.success(`Registered in ${file}`);
}

/**
 * Create component from generator template
 */
async function createFromTemplate(
  type: string,
  name: string,
  options: NewOptions,
  logger: Logger,
  spinner: any
): Promise<void> {
  // Load generator configuration
  const config = loadGeneratorConfig(type);
  const templatesDir = getTemplatesDir();
  const templateDir = path.join(templatesDir, type, 'templates');

  // Resolve target path with placeholders
  const targetPath =
    options.path || replacePlaceholders(config.targetPath, name, '');

  // Check if component already exists
  if (fs.existsSync(targetPath) && !options.force) {
    spinner.fail(chalk.red(`Component already exists: ${targetPath}`));
    logger.error('Use --force to overwrite');
    process.exit(1);
  }

  // Create target directory
  fs.ensureDirSync(targetPath);
  spinner.text = `Creating ${type} structure...`;

  // Process each template file
  for (const fileConfig of config.files) {
    const templatePath = path.join(templateDir, fileConfig.template);
    const outputPath = path.join(
      targetPath,
      replacePlaceholders(fileConfig.output, name, targetPath)
    );

    if (!fs.existsSync(templatePath)) {
      logger.warn(`Template not found: ${templatePath}`);
      continue;
    }

    // Read template content
    const templateContent = fs.readFileSync(templatePath, 'utf-8');

    // Replace placeholders
    const finalContent = replacePlaceholders(templateContent, name, targetPath);

    // Write output file
    fs.writeFileSync(outputPath, finalContent);
    if (options.verbose) {
      logger.debug(`Created: ${outputPath}`);
    }
  }

  // Register component if enabled
  if (options.register !== false) {
    spinner.text = `Registering ${type}...`;
    await registerComponent(config, name, targetPath, logger);
  }

  spinner.succeed(
    chalk.green(`✅ ${config.name} ${chalk.cyan(name)} created successfully!`)
  );

  // Show post-creation instructions
  if (config.postCreate && config.postCreate.length > 0) {
    logger.newLine();
    logger.info(chalk.bold('Next steps:'));

    for (const instruction of config.postCreate) {
      const finalInstruction = replacePlaceholders(
        instruction,
        name,
        targetPath
      );
      logger.bullet(finalInstruction);
    }
  }
}

/**
 * Setup new command
 */
export function setupNewCommand(program: Command): void {
  program
    .command('new <type> <name>')
    .description(
      'Create a new component from template (extension, module, etc.)'
    )
    .option('--path <path>', 'custom path for the component')
    .option('--force', 'overwrite if component already exists')
    .option('--no-register', 'skip registration in manifest/config')
    .option('--verbose', 'enable verbose output')
    .action(async (type: string, name: string, options: NewOptions) => {
      const logger = new Logger(options.verbose);
      await handleNewCommand(type, name, options, logger);
    });

  // Add list subcommand to show available generators
  program
    .command('new:list')
    .description('List all available component generators')
    .action(() => {
      const generators = discoverGenerators();

      console.log(chalk.bold('\nAvailable component generators:\n'));

      if (generators.length === 0) {
        console.log(chalk.yellow('  No generators found.'));
        console.log(chalk.gray('  Check templates/generators/ directory.\n'));
        return;
      }

      for (const type of generators) {
        try {
          const config = loadGeneratorConfig(type);
          console.log(
            `  ${chalk.cyan(type.padEnd(15))} ${chalk.gray(config.description)}`
          );
        } catch (error) {
          console.log(
            `  ${chalk.cyan(type.padEnd(15))} ${chalk.red('(config error)')}`
          );
        }
      }

      console.log('\nUsage: kimu new <type> <name>\n');
    });
}

/**
 * Handle new command
 */
export async function handleNewCommand(
  type: string,
  name: string,
  options: NewOptions,
  logger: Logger
): Promise<void> {
  const spinner = ora('Creating component...').start();

  try {
    // Check if we're in a KIMU project
    if (!fs.existsSync(KIMU_CONFIG_FILE)) {
      spinner.fail(chalk.red('Not in a KIMU project directory'));
      logger.error(
        `Run this command from the root of a KIMU project (${KIMU_CONFIG_FILE} not found)`
      );
      process.exit(1);
    }

    // Validate component type
    const availableTypes = discoverGenerators();
    if (!availableTypes.includes(type)) {
      spinner.fail(chalk.red(`Invalid component type: ${type}`));
      logger.error(`Valid types: ${availableTypes.join(', ')}`);
      logger.info('Run "kimu new:list" to see all available generators');
      process.exit(1);
    }

    // Validate component name
    const namePattern = /^[a-z0-9-]+$/;
    if (!namePattern.test(name)) {
      spinner.fail(chalk.red('Invalid component name'));
      logger.error(
        'Component name must contain only lowercase letters, numbers, and hyphens'
      );
      process.exit(1);
    }

    spinner.text = `Creating ${type} ${chalk.cyan(name)}...`;

    // Create component from template
    await createFromTemplate(type, name, options, logger, spinner);
  } catch (error) {
    spinner.fail(chalk.red('Failed to create component'));
    logger.error('Error details:', error as Error);
    process.exit(1);
  }
}
