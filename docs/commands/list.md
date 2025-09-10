# kimu list

List available and installed modules and extensions.

## Syntax
```bash
kimu list [type] [options]
```

## Arguments
- `modules`: list available modules from registry
- `extensions`: list available extensions from registry
- `installed`: list currently installed modules and extensions
- `templates`: list available project templates

## Options
- `--json`: output in JSON format
- `--verbose`: show detailed information
- `--registry <url>`: use custom registry URL
- `--filter <pattern>`: filter results by name pattern
- `--updates`: show available updates for installed packages

## Examples
```bash
# List all available modules
kimu list modules

# List all available extensions
kimu list extensions

# List installed packages
kimu list installed

# List available templates
kimu list templates

# Output in JSON format
kimu list modules --json

# Show detailed information
kimu list installed --verbose

# Filter by pattern
kimu list modules --filter "router*"

# Check for updates
kimu list installed --updates
```

## Output Information

### Basic listing shows:
- Package name and version
- Short description
- Installation status (for installed packages)

### Verbose listing additionally shows:
- Full description
- Author information
- Dependencies
- Compatibility requirements
- Last update date
- Download statistics

### Update checking shows:
- Current installed version
- Latest available version
- Update priority (patch/minor/major)
- Changelog summary

## Notes
- Requires internet connection for registry listings
- Cached results are used when possible for performance
- Updates can be checked for compatibility before installation
- Supports filtering and search functionality

## Registry Sources
- Official modules and extensions from KIMU repositories
- Community packages from verified sources
- Custom registries via `--registry` option

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Full registry browsing and package discovery
