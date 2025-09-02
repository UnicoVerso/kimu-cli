# The `kimu` Command

The main entry point for KIMU-CLI is the `kimu` command.

## Usage
```bash
kimu <command> [options]
```

## Available Commands
- `create <name>`: Create a new KIMU project
- `install module <name>`: Install a module
- `remove <name>`: Remove a module or extension
- `list modules`: List available modules
- `list installed`: List installed packages
- `build`: Build the project
- `dev`: Start development server
- `serve`: Serve built project
- `info`: Show project information
- `doctor`: Run diagnostics
- `version`: Show version information

## Options
- `--help`: Show help for any command
- `--verbose`: Enable verbose output
- `--json`: Output in JSON format (where supported)
- `--template <name>`: Specify a template for project creation
- `--no-install`: Skip npm install during project creation

## Examples
```bash
# Create a new project
kimu create my-app

# Install a module
kimu install module router

# Show project info in JSON
kimu info --json

# Build the project
kimu build
```
---
