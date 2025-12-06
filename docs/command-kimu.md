# The `kimu` Command Reference

The `kimu` command is the main entry point for KIMU-CLI and provides access to all framework tools and utilities.

## Installation

### Global Installation
```bash
npm install -g kimu-cli
```

### Using npx (No Installation)
```bash
npx kimu-cli <command> [options]
```

## Basic Usage
```bash
kimu <command> [options]
kimu <command> --help
kimu --version
```

## Global Options
These options are available for all commands:
- `--help, -h`: Show help for any command
- `--verbose`: Enable verbose output for detailed information
- `--version, -v`: Show KIMU-CLI version

## Command Categories

### 🚀 Project Management
| Command | Description | Status |
|---------|-------------|---------|
| `create <name>` | Create a new KIMU project | ✅ **Available** |
| `new <type> <name>` | Create components from templates | ✅ **Available** |
| `info` | Show project information and status | ✅ **Available** |
| `doctor` | Run project health diagnostics | ⏳ **Planned** |

### 📦 Package Management
| Command | Description | Status |
|---------|-------------|---------|
| `install <name>` | Install modules and extensions | ⏳ **Planned** |
| `remove <name>` | Remove modules and extensions | ⏳ **Planned** |
| `list [type]` | List available/installed packages | ⏳ **Planned** |

### 🔧 Development Workflow
| Command | Description | Status |
|---------|-------------|---------|
| `dev` | Start development server | ⏳ **Planned** |
| `build` | Build project for production | ⏳ **Planned** |
| `serve` | Serve built project | ⏳ **Planned** |

### ℹ️ Utilities
| Command | Description | Status |
|---------|-------------|---------|
| `version` | Show version information | ✅ **Available** |
| `help [command]` | Show help information | ✅ **Available** |

## Available Commands (Current)

### Project Creation
```bash
# Create a new project
kimu create my-app

# Create with git initialization
kimu create my-app --git

# Force overwrite existing directory
kimu create my-app --force
```

### Project Information
```bash
# Show basic project info
kimu info

# Show detailed information
kimu info --verbose

# Output in JSON format
kimu info --json
```

### Version and Help
```bash
# Show CLI version
kimu version

# Show detailed version info
kimu version --verbose

# Show general help
kimu help

# Show help for specific command
kimu help create
```

## Planned Commands (Coming Soon)

### Module Management
```bash
# Install a module
kimu install module router

# Install an extension
kimu install extension dashboard

# Remove a module/extension
kimu remove router

# List available modules
kimu list modules

# List installed packages
kimu list installed
```

### Development Tools
```bash
# Start development server
kimu dev --port 3000

# Build for production
kimu build --minify

# Serve built project
kimu serve --port 4000

# Run diagnostics
kimu doctor --fix
```

## Command Options Patterns

### Common Patterns
- `--verbose`: Detailed output (available for most commands)
- `--json`: JSON output format (for automation)
- `--force`: Skip confirmations and overwrite
- `--help`: Command-specific help

### Development Options
- `--port <number>`: Server port configuration
- `--host <string>`: Server host configuration
- `--open`: Automatically open browser
- `--watch`: Watch for file changes

### Build Options
- `--mode <mode>`: Build mode (development/production)
- `--target <target>`: JavaScript target (es2020/es2022/esnext)
- `--minify`: Enable minification
- `--sourcemap`: Generate source maps

## Examples by Use Case

### Starting a New Project
```bash
# Basic project setup
kimu create my-app
cd my-app
kimu info  # Verify project setup

# Development workflow (when implemented)
kimu dev   # Start development server
kimu build # Build for production
```

### Working with Modules
```bash
# Module management (when implemented)
kimu list modules              # Browse available modules
kimu install module router     # Install a module
kimu install extension dashboard  # Install an extension
kimu list installed           # See what's installed
```

### Debugging and Maintenance
```bash
# Project health (when implemented)
kimu doctor                   # Check project health
kimu doctor --fix            # Auto-fix common issues
kimu info --verbose          # Detailed project info
```

## Getting Help

### Command-Specific Help
Every command supports `--help`:
```bash
kimu create --help
kimu info --help
kimu version --help
```

### General Help
```bash
kimu help          # Show all commands
kimu help create   # Show help for create command
kimu --help        # Alternative syntax
```

### Verbose Information
Add `--verbose` to most commands for detailed output:
```bash
kimu info --verbose
kimu version --verbose
```

## Notes

- **Current Status**: Basic commands are implemented, advanced features coming soon
- **Project Context**: Some commands require being run from within a KIMU project directory
- **Internet Required**: Package management commands require internet connectivity
- **Node.js**: Requires Node.js >= 18.0.0 and npm >= 8.0.0
- **Documentation**: Each command has detailed documentation in `docs/commands/`

For detailed documentation on each command, see the individual files in the `docs/commands/` directory.

---
