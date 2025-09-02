/**
 * Default configurations for KIMU-CLI
 */

import {
  KimuConfig,
  BuildConfiguration,
  DevelopmentConfiguration,
  ModuleConfiguration,
  ExtensionConfiguration,
} from '../types/project-types';
import {
  DEFAULT_KIMU_CORE_VERSION,
  DEFAULT_TEMPLATE,
  DEFAULT_BUILD_TARGET,
  DEFAULT_BUILD_FORMAT,
  DEFAULT_DEV_PORT,
  DEFAULT_DEV_HOST,
  DEFAULT_REGISTRY_URL,
} from './constants';

export const DEFAULT_KIMU_CONFIG: Omit<KimuConfig, 'name' | 'version'> = {
  kimuCore: DEFAULT_KIMU_CORE_VERSION,
  template: DEFAULT_TEMPLATE,
  modules: {
    installed: [],
    registry: DEFAULT_REGISTRY_URL,
    dependencies: {},
  },
  extensions: {
    installed: ['kimu-home'],
    main: 'kimu-home',
    dependencies: {},
  },
  build: {
    target: DEFAULT_BUILD_TARGET,
    format: DEFAULT_BUILD_FORMAT,
    sourcemap: true,
    minify: false,
  },
  development: {
    port: DEFAULT_DEV_PORT,
    host: DEFAULT_DEV_HOST,
    open: true,
  },
};

export const DEFAULT_BUILD_CONFIG: BuildConfiguration = {
  target: DEFAULT_BUILD_TARGET,
  format: DEFAULT_BUILD_FORMAT,
  sourcemap: true,
  minify: false,
  outDir: 'dist',
};

export const DEFAULT_DEV_CONFIG: DevelopmentConfiguration = {
  port: DEFAULT_DEV_PORT,
  host: DEFAULT_DEV_HOST,
  open: true,
  hmr: true,
  https: false,
};

export const DEFAULT_MODULE_CONFIG: ModuleConfiguration = {
  installed: [],
  registry: DEFAULT_REGISTRY_URL,
  dependencies: {},
};

export const DEFAULT_EXTENSION_CONFIG: ExtensionConfiguration = {
  installed: ['kimu-home'],
  main: 'kimu-home',
  dependencies: {},
};

export const KIMU_PROJECT_PACKAGE_JSON_TEMPLATE = {
  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview',
    serve: 'vite serve',
    test: 'vitest',
    'test:ui': 'vitest --ui',
    lint: 'eslint src --ext .ts,.tsx',
    'lint:fix': 'eslint src --ext .ts,.tsx --fix',
    format: 'prettier --write src/**/*.{ts,tsx,html,css}',
  },
  dependencies: {
    '@kimu/core': DEFAULT_KIMU_CORE_VERSION,
  },
  devDependencies: {
    vite: '^5.0.0',
    typescript: '^5.0.0',
    '@typescript-eslint/eslint-plugin': '^6.0.0',
    '@typescript-eslint/parser': '^6.0.0',
    eslint: '^8.0.0',
    prettier: '^3.0.0',
    vitest: '^1.0.0',
  },
};

export const KIMU_TSCONFIG_TEMPLATE = {
  compilerOptions: {
    target: 'ES2020',
    lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    module: 'ESNext',
    skipLibCheck: true,
    moduleResolution: 'bundler',
    allowImportingTsExtensions: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
  },
  include: ['src'],
  references: [{ path: './tsconfig.node.json' }],
};

export const KIMU_VITE_CONFIG_TEMPLATE = `import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: 'src/main.ts',
      name: 'KimuApp',
      fileName: 'kimu-app',
      formats: ['es', 'iife'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  server: {
    port: 3000,
    host: 'localhost',
    open: true,
  },
});`;
