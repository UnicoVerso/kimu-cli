# kimu help

Show general help or help for a specific command.

## Syntax
```bash
kimu help [command]
kimu <command> --help
```

## Arguments
- `[command]`: optional command name to get specific help for

## Examples
```bash
# Show general help
kimu help

# Show help for specific command
kimu help create

# Alternative syntax for command help
kimu create --help
kimu version --help
```

## Available Commands
When running `kimu help`, you'll see all available commands:
- `create` - Create a new KIMU project
- `version` - Show version information
- `info` - Show project information
- `help` - Show this help message

## Notes
- Running `kimu` without any arguments also shows the help
- Each command supports the `--help` flag for specific help
- Use `--verbose` with many commands for more detailed output
