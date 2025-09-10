/**
 * Consistent logging utility for KIMU-CLI
 */

import chalk from 'chalk';
import { SYMBOLS } from '../config/constants';

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  SUCCESS = 3,
  DEBUG = 4,
}

export class Logger {
  private verbose: boolean;
  private level: LogLevel;

  constructor(verbose = false, level = LogLevel.INFO) {
    this.verbose = verbose;
    this.level = level;
  }

  setVerbose(verbose: boolean): void {
    this.verbose = verbose;
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  private shouldLog(level: LogLevel): boolean {
    return level <= this.level || (this.verbose && level <= LogLevel.DEBUG);
  }

  error(message: string, error?: Error): void {
    if (!this.shouldLog(LogLevel.ERROR)) return;

    console.error(chalk.red(`${SYMBOLS.ERROR} ${message}`));
    if (error && this.verbose) {
      console.error(chalk.gray(error.stack || error.message));
    }
  }

  warn(message: string): void {
    if (!this.shouldLog(LogLevel.WARN)) return;

    console.warn(chalk.yellow(`${SYMBOLS.WARNING} ${message}`));
  }

  info(message: string): void {
    if (!this.shouldLog(LogLevel.INFO)) return;

    console.log(chalk.blue(`${SYMBOLS.INFO} ${message}`));
  }

  success(message: string): void {
    if (!this.shouldLog(LogLevel.SUCCESS)) return;

    console.log(chalk.green(`${SYMBOLS.SUCCESS} ${message}`));
  }

  debug(message: string, data?: unknown): void {
    if (!this.shouldLog(LogLevel.DEBUG)) return;

    console.log(chalk.gray(`[DEBUG] ${message}`));
    if (data && this.verbose) {
      console.log(chalk.gray(JSON.stringify(data, null, 2)));
    }
  }

  log(message: string): void {
    console.log(message);
  }

  newLine(): void {
    console.log();
  }

  table(data: Record<string, unknown>[]): void {
    console.table(data);
  }

  json(data: unknown): void {
    console.log(JSON.stringify(data, null, 2));
  }

  // Utility methods for common patterns
  command(command: string): void {
    console.log(chalk.dim(`$ ${command}`));
  }

  step(step: number, total: number, message: string): void {
    const progress = chalk.dim(`[${step}/${total}]`);
    console.log(`${progress} ${message}`);
  }

  bullet(message: string): void {
    console.log(`  ${SYMBOLS.BULLET} ${message}`);
  }

  arrow(message: string): void {
    console.log(`  ${SYMBOLS.ARROW} ${message}`);
  }

  checkmark(message: string): void {
    console.log(chalk.green(`  ${SYMBOLS.CHECKMARK} ${message}`));
  }

  cross(message: string): void {
    console.log(chalk.red(`  ${SYMBOLS.CROSS} ${message}`));
  }

  // Format helpers
  bold(text: string): string {
    return chalk.bold(text);
  }

  dim(text: string): string {
    return chalk.dim(text);
  }

  highlight(text: string): string {
    return chalk.cyan(text);
  }

  code(text: string): string {
    return chalk.gray.inverse(` ${text} `);
  }

  path(text: string): string {
    return chalk.underline(text);
  }
}
