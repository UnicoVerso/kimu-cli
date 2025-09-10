/**
 * Project configuration types for KIMU projects
 */

export interface KimuConfig {
  name: string;
  version: string;
  kimuCore: string;
  template: string;
  modules: ModuleConfiguration;
  extensions: ExtensionConfiguration;
  build: BuildConfiguration;
  development: DevelopmentConfiguration;
}

export interface ModuleConfiguration {
  installed: string[];
  registry: string;
  dependencies: Record<string, string>;
}

export interface ExtensionConfiguration {
  installed: string[];
  main: string;
  dependencies: Record<string, string>;
}

export interface BuildConfiguration {
  target: string;
  format: 'esm' | 'iife' | 'cjs';
  sourcemap: boolean;
  minify: boolean;
  outDir?: string;
  publicPath?: string;
}

export interface DevelopmentConfiguration {
  port: number;
  host: string;
  open: boolean;
  hmr?: boolean;
  https?: boolean;
}

export interface ProjectStructure {
  [path: string]: string[] | ProjectStructure;
}

export interface PackageScripts {
  [scriptName: string]: string;
}

export interface KimuProjectTemplate {
  name: string;
  kimuCoreVersion: string;
  defaultModules: string[];
  structure: ProjectStructure;
  scripts: PackageScripts;
  description?: string;
  author?: string;
}

export interface VersionCompatibility {
  kimuCli: string;
  kimuCore: {
    required: string;
    installed?: string;
    compatible: boolean;
  };
  modules: {
    [name: string]: {
      required: string;
      installed: string;
      compatible: boolean;
    };
  };
}

export interface ProjectInfo {
  name: string;
  version: string;
  kimuCore: string;
  modules: string[];
  extensions: string[];
  template: string;
  isValid: boolean;
  compatibility: VersionCompatibility;
}
