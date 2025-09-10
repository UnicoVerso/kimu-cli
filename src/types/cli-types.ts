/**
 * CLI-specific types for KIMU-CLI
 */

export interface CreateOptions {
  template: string;
  install: boolean;
  verbose: boolean;
  yes: boolean;
}

export interface InstallOptions {
  verbose: boolean;
  save: boolean;
  dev: boolean;
}

export interface BuildOptions {
  production: boolean;
  watch: boolean;
  verbose: boolean;
}

export interface ServeOptions {
  port: number;
  host: string;
  open: boolean;
  verbose: boolean;
}

export interface ListOptions {
  installed: boolean;
  available: boolean;
  verbose: boolean;
}

export interface RemoveOptions {
  verbose: boolean;
  yes: boolean;
}

export interface UpdateOptions {
  verbose: boolean;
  all: boolean;
}

export interface InfoOptions {
  verbose: boolean;
  json: boolean;
}

export interface DoctorOptions {
  verbose: boolean;
  fix: boolean;
}

export interface VersionOptions {
  verbose: boolean;
}

export interface GlobalOptions {
  verbose: boolean;
  help: boolean;
  version: boolean;
}
