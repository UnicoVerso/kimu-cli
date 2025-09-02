/**
 * Version command implementation
 */

import { Command } from 'commander';
import { CLI_VERSION, CLI_NAME } from '../config/constants';
import { Logger } from '../utils/logger';
import { VersionOptions } from '../types/cli-types';

export function setupVersionCommand(program: Command): void {
  program
    .command('version')
    .description('Display version information')
    .option('--verbose', 'show detailed version information')
    .action(async (options: VersionOptions) => {
      const logger = new Logger(options.verbose);
      await handleVersionCommand(options, logger);
    });
}

export async function handleVersionCommand(
  options: VersionOptions,
  logger: Logger
): Promise<void> {
  try {
    if (options.verbose) {
      logger.info('KIMU CLI Version Information');
      logger.newLine();
      logger.bullet(`CLI Name: ${CLI_NAME}`);
      logger.bullet(`CLI Version: ${CLI_VERSION}`);
      logger.bullet(`Node.js Version: ${process.version}`);
      logger.bullet(`Platform: ${process.platform}`);
      logger.bullet(`Architecture: ${process.arch}`);
      
      // TODO: Add KIMU Core version detection when project detection is implemented
      // const projectInfo = await detectKimuProject();
      // if (projectInfo) {
      //   logger.bullet(`KIMU Core Version: ${projectInfo.kimuCore}`);
      // }
    } else {
      logger.log(`${CLI_NAME} v${CLI_VERSION}`);
    }
  } catch (error) {
    logger.error('Failed to retrieve version information', error as Error);
    process.exit(1);
  }
}
