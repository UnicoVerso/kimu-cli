/**
 * Info command implementation
 */

import { Command } from 'commander';
import { Logger } from '../utils/logger';
import { InfoOptions } from '../types/cli-types';
import { CLI_NAME, CLI_VERSION, KIMU_CONFIG_FILE } from '../config/constants';
import * as fs from 'fs-extra';
import * as path from 'path';

export function setupInfoCommand(program: Command): void {
  program
    .command('info')
    .description('Display project information and diagnostics')
    .option('--json', 'output information in JSON format')
    .option('--verbose', 'show detailed information')
    .action(async (options: InfoOptions) => {
      const logger = new Logger(options.verbose);
      await handleInfoCommand(options, logger);
    });
}

export async function handleInfoCommand(
  options: InfoOptions,
  logger: Logger
): Promise<void> {
  try {
    const projectInfo = await gatherProjectInfo();
    
    if (options.json) {
      logger.json(projectInfo);
    } else {
      displayProjectInfo(projectInfo, logger, options.verbose);
    }
  } catch (error) {
    logger.error('Failed to gather project information', error as Error);
    process.exit(1);
  }
}

interface ProjectInfoData {
  cli: {
    name: string;
    version: string;
  };
  environment: {
    nodeVersion: string;
    platform: string;
    architecture: string;
    cwd: string;
  };
  project?: {
    name: string;
    version: string;
    kimuCore: string;
    template: string;
    modules: string[];
    extensions: string[];
    isValid: boolean;
  };
}

async function gatherProjectInfo(): Promise<ProjectInfoData> {
  const info: ProjectInfoData = {
    cli: {
      name: CLI_NAME,
      version: CLI_VERSION,
    },
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      architecture: process.arch,
      cwd: process.cwd(),
    },
  };

  // Check if we're in a KIMU project
  const kimuConfigPath = path.join(process.cwd(), KIMU_CONFIG_FILE);
  
  if (await fs.pathExists(kimuConfigPath)) {
    try {
      const kimuConfig = await fs.readJson(kimuConfigPath);
      info.project = {
        name: kimuConfig.name || 'Unknown',
        version: kimuConfig.version || '0.0.0',
        kimuCore: kimuConfig.kimuCore || 'Unknown',
        template: kimuConfig.template || 'Unknown',
        modules: kimuConfig.modules?.installed || [],
        extensions: kimuConfig.extensions?.installed || [],
        isValid: true, // TODO: Implement proper validation
      };
    } catch (error) {
      info.project = {
        name: 'Invalid',
        version: '0.0.0',
        kimuCore: 'Unknown',
        template: 'Unknown',
        modules: [],
        extensions: [],
        isValid: false,
      };
    }
  }

  return info;
}

function displayProjectInfo(
  info: ProjectInfoData,
  logger: Logger,
  verbose: boolean
): void {
  logger.info('KIMU CLI Information');
  logger.newLine();
  
  // CLI Information
  logger.bullet(`CLI Version: ${logger.highlight(info.cli.version)}`);
  
  if (verbose) {
    logger.bullet(`Node.js: ${info.environment.nodeVersion}`);
    logger.bullet(`Platform: ${info.environment.platform}`);
    logger.bullet(`Architecture: ${info.environment.architecture}`);
    logger.bullet(`Working Directory: ${logger.path(info.environment.cwd)}`);
  }
  
  logger.newLine();
  
  // Project Information
  if (info.project) {
    if (info.project.isValid) {
      logger.success('KIMU Project Detected');
      logger.bullet(`Name: ${logger.highlight(info.project.name)}`);
      logger.bullet(`Version: ${info.project.version}`);
      logger.bullet(`KIMU Core: ${info.project.kimuCore}`);
      logger.bullet(`Template: ${info.project.template}`);
      
      if (info.project.modules.length > 0) {
        logger.bullet(`Modules: ${info.project.modules.join(', ')}`);
      }
      
      if (info.project.extensions.length > 0) {
        logger.bullet(`Extensions: ${info.project.extensions.join(', ')}`);
      }
    } else {
      logger.warn('Invalid KIMU project configuration detected');
    }
  } else {
    logger.info('No KIMU project detected in current directory');
    logger.dim('  Run `kimu create <name>` to create a new KIMU project');
  }
}
