/**
 * Global constants for KIMU-CLI
 */

export const CLI_NAME = 'kimu';
export const CLI_VERSION = '1.0.0';

// Registry configuration
export const DEFAULT_REGISTRY_URL =
  'https://github.com/unicoverso/kimu-modules';
export const REGISTRY_API_ENDPOINT =
  'https://api.github.com/repos/unicoverso/kimu-modules';
export const REGISTRY_TIMEOUT = 30000; // 30 seconds
export const REGISTRY_RETRIES = 3;
export const CACHE_TTL = 3600000; // 1 hour in milliseconds

// File and directory names
export const KIMU_CONFIG_FILE = 'kimu.config.json';
export const PACKAGE_JSON_FILE = 'package.json';
export const TSCONFIG_FILE = 'tsconfig.json';
export const VITE_CONFIG_FILE = 'vite.config.ts';
export const SRC_DIR = 'src';
export const DIST_DIR = 'dist';
export const MODULES_DIR = 'modules';
export const EXTENSIONS_DIR = 'extensions';

// KIMU Core configuration
export const DEFAULT_KIMU_CORE_VERSION = '^1.0.0';
export const SUPPORTED_NODE_VERSIONS = '>=18.0.0';
export const SUPPORTED_NPM_VERSIONS = '>=8.0.0';

// Template configuration
export const DEFAULT_TEMPLATE = 'basic';
export const AVAILABLE_TEMPLATES = ['basic', 'dashboard', 'chat'];

// Build configuration
export const DEFAULT_BUILD_TARGET = 'es2020';
export const DEFAULT_BUILD_FORMAT = 'esm';
export const DEFAULT_DEV_PORT = 3000;
export const DEFAULT_DEV_HOST = 'localhost';

// Validation patterns
export const PROJECT_NAME_PATTERN = /^[a-z0-9-]+$/;
export const MODULE_NAME_PATTERN = /^[a-z0-9-]+$/;

// Colors and symbols for CLI output
export const SYMBOLS = {
  SUCCESS: '✅',
  ERROR: '❌',
  WARNING: '⚠️',
  INFO: 'ℹ️',
  LOADING: '⏳',
  CHECKMARK: '✓',
  CROSS: '✗',
  ARROW: '→',
  BULLET: '•',
} as const;

// Exit codes
export const EXIT_CODES = {
  SUCCESS: 0,
  ERROR: 1,
  INVALID_ARGUMENT: 2,
  FILE_NOT_FOUND: 3,
  NETWORK_ERROR: 4,
  VALIDATION_ERROR: 5,
  PERMISSION_ERROR: 6,
} as const;
