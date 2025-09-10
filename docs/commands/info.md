# kimu info

Show information about the current KIMU project.

## Syntax
```bash
kimu info [--verbose] [--json]
```

## Options
- `--verbose`: show detailed project information
- `--json`: output in JSON format for machine processing

## Examples
```bash
# Show basic project info
kimu info

# Show detailed project information
kimu info --verbose

# Output in JSON format
kimu info --json

# Combine options
kimu info --verbose --json
```

## Output Information
The basic info command shows:
- Project name and version
- KIMU-Core version (if detected)
- Project type and template

The verbose info command additionally shows:
- Installed modules and extensions
- Build configuration
- Development settings
- Project dependencies
- System requirements status

## Notes
- Must be run from within a KIMU project directory
- JSON output is useful for automation and scripting
- If no kimu.config.json is found, shows detection results
- Use this command to verify project setup and configuration
