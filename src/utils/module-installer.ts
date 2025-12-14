// module-installer.ts: logica di installazione moduli/estensioni KIMU
import { KimuRegistry } from './registry';
import { spawnSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs-extra';

interface InstallOptions {
  verbose?: boolean;
  type?: 'module' | 'extension';
  saveDev?: boolean;
  registry?: string;
  version?: string;
  force?: boolean;
}

/**
 * Find kimu-core installation path
 * Checks: node_modules, parent directories, and workspace structure
 */
function findKimuCorePath(): string | null {
  const cwd = process.cwd();

  // Check in node_modules (if kimu-core is a dependency)
  const nodeModulesPath = path.join(cwd, 'node_modules', 'kimu-core');
  if (fs.existsSync(nodeModulesPath)) {
    return nodeModulesPath;
  }

  // Check in current directory (if we're inside kimu-core)
  if (fs.existsSync(path.join(cwd, 'scripts', 'install-module.js'))) {
    return cwd;
  }

  // Check parent directories (common workspace structure)
  let currentDir = cwd;
  for (let i = 0; i < 3; i++) {
    const parentDir = path.dirname(currentDir);
    const kimuCorePath = path.join(parentDir, 'kimu-core');
    if (
      fs.existsSync(path.join(kimuCorePath, 'scripts', 'install-module.js'))
    ) {
      return kimuCorePath;
    }
    currentDir = parentDir;
  }

  return null;
}

/**
 * Install module using kimu-core's install script
 */
async function installModuleViaKimuCore(name: string, options: InstallOptions) {
  const kimuCorePath = findKimuCorePath();

  if (!kimuCorePath) {
    throw new Error(
      'kimu-core not found. Please ensure kimu-core is installed as a dependency or accessible in your workspace.'
    );
  }

  const scriptPath = path.join(kimuCorePath, 'scripts', 'install-module.js');

  if (!fs.existsSync(scriptPath)) {
    throw new Error(
      `install-module.js script not found in kimu-core at: ${scriptPath}`
    );
  }

  if (options.verbose) {
    console.log(`[DEBUG] Using kimu-core at: ${kimuCorePath}`);
    console.log(`[DEBUG] Running script: ${scriptPath}`);
  }

  // Execute kimu-core's install script
  const result = spawnSync('node', [scriptPath, name], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });

  if (result.error) {
    throw new Error(
      `Failed to execute install script: ${result.error.message}`
    );
  }

  if (result.status !== 0) {
    throw new Error(
      `Module installation failed with exit code ${result.status}`
    );
  }
}

/**
 * Install extension (placeholder for future implementation)
 */
async function installExtension(name: string, _options: InstallOptions) {
  const registry = KimuRegistry.getInstance();
  const info = await registry.getModuleInfo(name, 'extension');

  if (!info) {
    throw new Error(`Extension "${name}" not found in registry.`);
  }

  // TODO: Implement extension installation
  // Extensions might have different installation logic than modules
  throw new Error(
    'Extension installation is not yet implemented. Please install extensions manually or wait for future updates.'
  );
}

export async function installModuleOrExtension(
  name: string,
  options: InstallOptions
) {
  if (options.type === 'module') {
    // Delegate to kimu-core's installation script
    await installModuleViaKimuCore(name, options);
  } else if (options.type === 'extension') {
    // Use extension installation logic
    await installExtension(name, options);
  } else {
    throw new Error(
      'Installation type must be specified: "module" or "extension"'
    );
  }
}
