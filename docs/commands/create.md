# kimu create

Create a new KIMU project in a new folder.

## Syntax
```bash
kimu create <project-name> [--no-install] [--git] [--force]
```

## Arguments
- `<project-name>`: name of the folder to create (required)

## Options
- `--no-install`: skip npm install after project creation
- `--git`: initialize a git repository in the project folder
- `--force`: overwrite the folder if it already exists

## Examples
```bash
# Create a basic project
kimu create my-app

# Create with git initialization
kimu create my-app --git

# Create without npm install
kimu create my-app --no-install

# Force overwrite existing folder
kimu create my-app --force

# Combine multiple options
kimu create my-app --git --no-install
```

## What it creates
Currently, the command creates:
- A new project folder with the specified name
- A basic README.md file
- Git repository initialization (if `--git` flag is used)

## Notes
- The project name must contain only lowercase letters, numbers, and hyphens
- The command will fail if the target folder already exists (unless `--force` is used)
- Future versions will include full KIMU project scaffolding with templates
- Currently this is a basic implementation - full kimu-core integration is coming soon

## Future features (planned)
- Template support (`--template basic|dashboard|chat`)
- Automatic kimu-core installation
- Complete project structure generation
- Configuration file creation (kimu.config.json, package.json, tsconfig.json)
- Module and extension scaffolding
