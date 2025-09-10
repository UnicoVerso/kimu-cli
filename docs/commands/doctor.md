# kimu doctor

Run diagnostics and health checks for your KIMU project.

## Syntax
```bash
kimu doctor [options]
```

## Options
- `--verbose`: show detailed diagnostic information
- `--json`: output results in JSON format
- `--fix`: automatically fix common issues where possible
- `--skip <checks>`: skip specific diagnostic checks
- `--only <checks>`: run only specific diagnostic checks

## Examples
```bash
# Run all diagnostics
kimu doctor

# Verbose output with details
kimu doctor --verbose

# Output in JSON format
kimu doctor --json

# Auto-fix issues where possible
kimu doctor --fix

# Skip specific checks
kimu doctor --skip "dependencies,permissions"

# Run only specific checks
kimu doctor --only "config,modules"
```

## Diagnostic Checks

### System Requirements
- ✅ Node.js version compatibility (>= 18.0.0)
- ✅ NPM version compatibility (>= 8.0.0)
- ✅ Operating system compatibility
- ✅ Available disk space
- ✅ Network connectivity

### Project Structure
- ✅ KIMU project detection (`kimu.config.json` exists)
- ✅ Required directories exist (`src/`, `dist/`, etc.)
- ✅ Package.json validity and KIMU dependencies
- ✅ TypeScript configuration (`tsconfig.json`)
- ✅ Build configuration files

### Dependencies
- ✅ KIMU-Core version compatibility
- ✅ Module dependency resolution
- ✅ Extension compatibility
- ✅ Node modules integrity
- ✅ Security vulnerabilities scan

### Configuration
- ✅ KIMU configuration syntax and validity
- ✅ Build configuration consistency
- ✅ Development server settings
- ✅ Registry connectivity
- ✅ Environment variables

### Performance
- ✅ Bundle size analysis
- ✅ Build time optimization opportunities
- ✅ Module resolution efficiency
- ✅ Asset optimization status

## Auto-Fix Capabilities
When using `--fix`, doctor can automatically:
- Update outdated dependencies
- Fix common configuration issues
- Create missing directories
- Repair corrupted node_modules
- Update deprecated configuration syntax

## Output Format
### Standard Output
```
✅ System Requirements: All checks passed
⚠️  Dependencies: 2 updates available
❌ Configuration: Invalid kimu.config.json syntax
ℹ️  Performance: Bundle size could be optimized
```

### JSON Output
```json
{
  "status": "warning",
  "checks": {
    "system": { "status": "pass", "issues": [] },
    "dependencies": { "status": "warning", "issues": ["outdated-packages"] },
    "configuration": { "status": "error", "issues": ["invalid-syntax"] }
  },
  "summary": {
    "total": 15,
    "passed": 12,
    "warnings": 2,
    "errors": 1
  }
}
```

## Check Categories
Available check categories for `--skip` and `--only`:
- `system`: System requirements and environment
- `dependencies`: Package and module dependencies
- `config`: Configuration files and settings
- `modules`: KIMU modules and extensions
- `performance`: Performance and optimization
- `security`: Security vulnerabilities
- `build`: Build system and tools

## Notes
- Can be run from any directory (will detect KIMU projects)
- Provides actionable recommendations
- Safe to run multiple times
- Helps identify common development issues
- Useful for CI/CD pipeline health checks

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Comprehensive project health analysis with auto-fix capabilities
