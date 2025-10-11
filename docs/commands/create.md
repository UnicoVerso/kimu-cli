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
The command performs the following steps:
1. **Clones kimu-core repository** from GitHub (https://github.com/UnicoVerso/kimu-core.git)
2. **Removes .git directory** to clean the project from the original repository history
3. **Updates package.json** with the new project name
4. **Installs npm dependencies** (unless `--no-install` is used)
5. **Initializes new git repository** (if `--git` flag is used) with an initial commit
6. **Provides next steps** for the user to continue development

## Notes
- The project name must contain only lowercase letters, numbers, and hyphens
- The command will fail if the target folder already exists (unless `--force` is used)
- Requires git to be installed on the system for repository cloning
- Internet connection is required to clone the kimu-core repository
- If cloning fails, the command will clean up any partial files created
- The original kimu-core git history is completely removed from the new project

## Future features (planned)
- Template support (`--template basic|dashboard|chat`)
- Custom repository URLs for cloning different project templates
- Offline mode with cached project templates
- Configuration file customization options
- Integration with KIMU module and extension marketplace
