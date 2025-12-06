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
1. **Creates project folder** and validates it doesn't exist (or confirms overwrite)
2. **Initializes npm** with `npm init -y` creating `package.json`
3. **Installs kimu-core** via `npm install kimu-core` from npm registry
4. **Copies all files** from `node_modules/kimu-core` to the project root:
   - `src/` - Source code with core framework, extensions, and modules
   - `scripts/` - Build and utility scripts
   - `public/` - Static assets
   - `README.md`, `LICENSE`, configuration files, etc.
   - Excludes: `node_modules/`, `dist/`, `.git/`, `.env`, `package-lock.json`
5. **Removes kimu-core** from `node_modules` after copying
6. **Installs dependencies** with `npm install` (unless `--no-install` is used)
7. **Generates build config** by running `npm run generate-config:dev`
8. **Updates package.json** with the project name
9. **Initializes git repository** (if `--git` flag is used) with initial commit
10. **Displays success message** with next steps

## Project Structure Created
```
my-app/
├── src/                    # Source code
│   ├── core/              # KIMU core framework
│   ├── extensions/        # UI extensions
│   ├── modules/           # Modules (router, i18n, etc.)
│   └── main.ts            # Application entry point
├── public/                # Static assets
├── scripts/               # Build scripts
├── dist/                  # Build output (created on build)
├── kimu.config.json       # KIMU configuration
├── kimu-build-config.ts   # Build configuration (generated)
├── package.json           # NPM dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler config
└── README.md              # Project documentation
```

## Notes
- The project name must contain only lowercase letters, numbers, and hyphens
- The command will ask for confirmation if the target folder already exists (unless `--force` is used)
- Requires Node.js >= 18.0.0 and npm >= 8.0.0
- Internet connection is required to download kimu-core from npm
- Uses kimu-core from npm registry (https://www.npmjs.com/package/kimu-core)
- All framework files are copied locally, making the project fully independent
- The `kimu-build-config.ts` is auto-generated based on your environment

## Next Steps After Creation
```bash
# Navigate to project
cd my-app

# Start development server
npm run dev

# Build for production
npm run build

# Check project info
kimu info --verbose
```

## Future features (planned)
- Template support (`--template basic|dashboard|chat`)
- Interactive prompts for project configuration
- Offline mode with cached templates
- Custom npm registry support
- Module pre-selection during creation
- Extension marketplace integration
