import { Command } from 'commander';
import chalk from 'chalk';
import * as fs from 'fs-extra';
import * as path from 'path';

interface DiagnosticResult {
  category: string;
  checks: Array<{
    name: string;
    status: 'pass' | 'fail' | 'warn';
    message: string;
  }>;
}

async function checkProjectStructure(): Promise<DiagnosticResult> {
  const checks = [];
  
  // Check package.json
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (await fs.pathExists(packageJsonPath)) {
    checks.push({
      name: 'package.json',
      status: 'pass' as const,
      message: 'Found package.json',
    });
  } else {
    checks.push({
      name: 'package.json',
      status: 'fail' as const,
      message: 'package.json not found',
    });
  }
  
  // Check src directory
  const srcPath = path.join(process.cwd(), 'src');
  if (await fs.pathExists(srcPath)) {
    checks.push({
      name: 'src directory',
      status: 'pass' as const,
      message: 'Found src/ directory',
    });
  } else {
    checks.push({
      name: 'src directory',
      status: 'fail' as const,
      message: 'src/ directory not found',
    });
  }
  
  // Check modules
  const modulesPath = path.join(process.cwd(), 'src', 'modules');
  if (await fs.pathExists(modulesPath)) {
    const modulesManifestPath = path.join(modulesPath, 'modules-manifest.json');
    if (await fs.pathExists(modulesManifestPath)) {
      checks.push({
        name: 'modules manifest',
        status: 'pass' as const,
        message: 'Found modules-manifest.json',
      });
    } else {
      checks.push({
        name: 'modules manifest',
        status: 'warn' as const,
        message: 'modules-manifest.json not found',
      });
    }
  } else {
    checks.push({
      name: 'modules',
      status: 'warn' as const,
      message: 'src/modules/ directory not found',
    });
  }
  
  // Check extensions
  const extensionsPath = path.join(process.cwd(), 'src', 'extensions');
  if (await fs.pathExists(extensionsPath)) {
    const extensionsManifestPath = path.join(extensionsPath, 'extensions-manifest.json');
    if (await fs.pathExists(extensionsManifestPath)) {
      checks.push({
        name: 'extensions manifest',
        status: 'pass' as const,
        message: 'Found extensions-manifest.json',
      });
    } else {
      checks.push({
        name: 'extensions manifest',
        status: 'warn' as const,
        message: 'extensions-manifest.json not found',
      });
    }
  } else {
    checks.push({
      name: 'extensions',
      status: 'warn' as const,
      message: 'src/extensions/ directory not found',
    });
  }
  
  return {
    category: 'Project Structure',
    checks,
  };
}

async function checkDependencies(): Promise<DiagnosticResult> {
  const checks = [];
  
  // Check node_modules
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  if (await fs.pathExists(nodeModulesPath)) {
    checks.push({
      name: 'node_modules',
      status: 'pass' as const,
      message: 'Dependencies installed',
    });
  } else {
    checks.push({
      name: 'node_modules',
      status: 'fail' as const,
      message: 'Dependencies not installed. Run: npm install',
    });
  }
  
  // Check for kimu-core
  const kimuCorePath = path.join(process.cwd(), 'node_modules', 'kimu-core');
  if (await fs.pathExists(kimuCorePath)) {
    checks.push({
      name: 'kimu-core',
      status: 'pass' as const,
      message: 'kimu-core is installed',
    });
  } else {
    checks.push({
      name: 'kimu-core',
      status: 'warn' as const,
      message: 'kimu-core not found in dependencies',
    });
  }
  
  return {
    category: 'Dependencies',
    checks,
  };
}

async function checkBuildArtifacts(): Promise<DiagnosticResult> {
  const checks = [];
  
  // Check dist directory
  const distPath = path.join(process.cwd(), 'dist');
  if (await fs.pathExists(distPath)) {
    checks.push({
      name: 'dist directory',
      status: 'pass' as const,
      message: 'Build artifacts found',
    });
  } else {
    checks.push({
      name: 'dist directory',
      status: 'warn' as const,
      message: 'Build artifacts not found. Run: kimu build',
    });
  }
  
  return {
    category: 'Build Artifacts',
    checks,
  };
}

export function setupDoctorCommand(program: Command): void {
  program
    .command('doctor')
    .description('Run diagnostics on your KIMU project')
    .option('--verbose', 'show detailed diagnostic information')
    .action(async (_options: any) => {
      console.log(chalk.bold.cyan('\n🏥 KIMU Project Diagnostics\n'));
      
      try {
        const diagnostics: DiagnosticResult[] = [
          await checkProjectStructure(),
          await checkDependencies(),
          await checkBuildArtifacts(),
        ];
        
        let totalPass = 0;
        let totalFail = 0;
        let totalWarn = 0;
        
        for (const diagnostic of diagnostics) {
          console.log(chalk.bold(`\n${diagnostic.category}:`));
          
          for (const check of diagnostic.checks) {
            const icon =
              check.status === 'pass'
                ? chalk.green('✓')
                : check.status === 'fail'
                ? chalk.red('✗')
                : chalk.yellow('⚠');
            
            const message =
              check.status === 'pass'
                ? chalk.green(check.message)
                : check.status === 'fail'
                ? chalk.red(check.message)
                : chalk.yellow(check.message);
            
            console.log(`  ${icon} ${check.name}: ${message}`);
            
            if (check.status === 'pass') totalPass++;
            if (check.status === 'fail') totalFail++;
            if (check.status === 'warn') totalWarn++;
          }
        }
        
        console.log(chalk.bold.cyan('\n📊 Summary:\n'));
        console.log(`  ${chalk.green('✓')} Passed: ${totalPass}`);
        console.log(`  ${chalk.red('✗')} Failed: ${totalFail}`);
        console.log(`  ${chalk.yellow('⚠')} Warnings: ${totalWarn}\n`);
        
        if (totalFail > 0) {
          console.log(
            chalk.red(
              '❌ Your project has some issues. Please fix the failures above.\n'
            )
          );
          process.exit(1);
        } else if (totalWarn > 0) {
          console.log(
            chalk.yellow(
              '⚠️  Your project is mostly healthy, but has some warnings.\n'
            )
          );
        } else {
          console.log(chalk.green('✅ Your project is healthy!\n'));
        }
      } catch (error: any) {
        console.error(chalk.red(`❌ Diagnostics failed: ${error.message}\n`));
        process.exit(1);
      }
    });
}
