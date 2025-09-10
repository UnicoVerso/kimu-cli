# kimu install

Install modules and extensions for your KIMU project.

## Syntax
```bash
kimu install module <name> [options]
kimu install extension <name> [options]
kimu install <name> [options]
```

## Arguments
- `module <name>`: install a specific module from the KIMU modules registry
- `extension <name>`: install a specific extension from the KIMU extensions registry
- `<name>`: auto-detect type and install module or extension

## Options
- `--save-dev`: install as development dependency
- `--registry <url>`: use custom registry URL
- `--version <version>`: install specific version
- `--force`: force reinstall if already installed
- `--verbose`: show detailed installation progress

## Examples
```bash
# Install a module
kimu install module router

# Install an extension
kimu install extension dashboard

# Auto-detect and install
kimu install analytics

# Install specific version
kimu install module router --version 1.2.0

# Install from custom registry
kimu install module router --registry https://custom-registry.com

# Force reinstall
kimu install module router --force
```

## What it does
- Downloads the specified module or extension from the registry
- Resolves and installs dependencies
- Updates kimu.config.json with the new installation
- Verifies compatibility with current KIMU-Core version
- Sets up module/extension in the correct project structure

## Notes
- Must be run from within a KIMU project directory
- Automatically resolves dependencies and compatibility
- Updates project configuration files
- Supports both official and community packages
- Requires internet connection to access registries

## Registry Sources
- Official KIMU modules: `https://github.com/unicoverso/kimu-modules`
- Community extensions: `https://github.com/unicoverso/kimu-extensions`
- Custom registries supported via `--registry` option

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Full registry integration with dependency resolution
