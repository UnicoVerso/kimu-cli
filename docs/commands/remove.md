# kimu remove

Remove modules and extensions from your KIMU project.

## Syntax
```bash
kimu remove <name> [options]
kimu remove module <name> [options]
kimu remove extension <name> [options]
```

## Arguments
- `<name>`: name of the module or extension to remove (auto-detected)
- `module <name>`: explicitly remove a module
- `extension <name>`: explicitly remove an extension

## Options
- `--force`: force removal without confirmation
- `--keep-config`: remove files but keep configuration entries
- `--cleanup`: also remove unused dependencies
- `--verbose`: show detailed removal progress

## Examples
```bash
# Remove a module or extension (auto-detect)
kimu remove router

# Explicitly remove a module
kimu remove module analytics

# Explicitly remove an extension
kimu remove extension dashboard

# Force removal without confirmation
kimu remove router --force

# Remove but keep configuration
kimu remove router --keep-config

# Remove with dependency cleanup
kimu remove router --cleanup
```

## What it does
- Removes module/extension files from the project
- Updates kimu.config.json to remove configuration entries
- Optionally removes unused dependencies
- Cleans up build configuration references
- Provides confirmation prompts for safety

## Notes
- Must be run from within a KIMU project directory
- Prompts for confirmation unless `--force` is used
- Can detect and remove orphaned dependencies with `--cleanup`
- Updates all relevant configuration files
- Preserves project integrity during removal

## Safety Features
- Confirmation prompts for destructive operations
- Backup suggestions for important removals
- Dependency impact analysis
- Rollback instructions provided

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Safe removal with dependency management
