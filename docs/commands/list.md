# kimu list

List available and installed modules and extensions.

## Syntax
```bash
kimu list modules [options]
kimu list extensions [options]
kimu list installed [options]
```

## Abbreviations

You can use short aliases for list commands:

- `kimu l m` → `kimu list modules`
- `kimu l e` → `kimu list extensions`
- `kimu l i` → `kimu list installed`

## Arguments
- `modules`: list available modules from registry
- `extensions`: list available extensions from registry
- `installed`: list currently installed modules and extensions in your project

## Options
- `--verbose`: show detailed information (descriptions, etc.)

## Examples
```bash
# List all available modules
kimu list modules
# Or using abbreviation
kimu l m

# List all available extensions
kimu list extensions
# Or using abbreviation
kimu l e

# List installed packages in current project
kimu list installed
# Or using abbreviation
kimu l i

# Show detailed information
kimu list modules --verbose
kimu l e --verbose
```

## Output Information

### `kimu list modules` and `kimu list extensions` show:
- Package name and version
- Installation status with visual indicators:
  - ✓ (green checkmark) for installed packages
  - ○ (gray circle) for available packages
  - `[installed]` label for clarity
- With `--verbose`: full description

### `kimu list installed` shows:
- All modules and extensions currently installed in your project
- Read from `kimu.config.json`
- Grouped by type (Modules and Extensions)

## Notes
- `list modules` and `list extensions` read from registry and check installation status from `kimu.config.json`
- `list installed` only shows packages actually installed in your project
- Must be run from within a KIMU project directory (for installation status)

## Status
✅ **Command available (mock version)**
- Current status: The list command is available and reads installation status from kimu.config.json. Registry data is mocked, real registry integration coming soon.
- Target: Full registry integration with real-time data and search functionality.
