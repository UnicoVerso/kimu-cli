# kimu install

Install modules and extensions for your KIMU project.

## Syntax
```bash
kimu install module <name> [options]
kimu install extension <name> [options]
```

## Arguments
- `module <name>`: install a specific module from the KIMU modules registry
- `extension <name>`: install a specific extension from the KIMU extensions registry

> ⚠️ **It is strongly recommended to always specify `module` or `extension` explicitly.**
> The generic `kimu install <name>` syntax is discouraged to avoid ambiguity with third-party or similarly named packages.

## Abbreviations

You can use short aliases for install commands:

- `kimu i m <name>` → `kimu install module <name>`
- `kimu i e <name>` → `kimu install extension <name>`

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
# Or using abbreviation
kimu i m router

# Install an extension
kimu install extension dashboard
# Or using abbreviation
kimu i e dashboard

# Install specific version
kimu install module router --version 1.2.0

# Install from custom registry
kimu install module router --registry https://custom-registry.com

# Force reinstall
kimu install module router --force

# Verbose output
kimu install module analytics --verbose
```

## Listing available and installed modules/extensions

To list available modules/extensions from the registry:
```bash
kimu list modules      # Shows all modules with [installed] marker
kimu list extensions   # Shows all extensions with [installed] marker
```

To list only installed modules/extensions in your project:
```bash
kimu list installed    # Shows installed modules and extensions
```

The `list modules` and `list extensions` commands show:
- ✓ Green checkmark for installed packages
- ○ Gray circle for available packages
- `[installed]` label for clarity

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
✅ **Command available (mock version)**
- Current status: The install command is available and simulates the installation of modules or extensions from the registry (mock). The real logic for download and integration will be added in future releases.
- Target: Full registry integration and dependency resolution coming soon.

### Current behavior (December 2025)
- The command accepts the name of a module or extension and shows a simulated installation.
- You must specify `module` or `extension` explicitly.
- Example:
  ```bash
  kimu install module router
  kimu i m router
  kimu install extension app-root
  kimu i e kimu-dashboard
  kimu install module analytics --verbose
  ```
- Simulated success or error output.
- The structure is ready to be connected to a real registry.
