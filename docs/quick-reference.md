# KIMU-CLI Quick Reference

A quick reference guide for the most common KIMU-CLI commands and workflows.

## Installation

```bash
# Global installation (recommended)
npm install -g kimu-cli

# Check installation
kimu --version

# Update to latest version
npm update -g kimu-cli
```

## Project Creation

```bash
# Basic project creation
kimu create my-app

# With git initialization
kimu create my-app --git

# Skip npm install (manual installation later)
kimu create my-app --no-install

# Force overwrite existing directory
kimu create my-app --force

# Using npx (no global installation)
npx kimu-cli create my-app
```

## Component Generation

```bash
# Create new extension
kimu new extension my-feature

# Create new module
kimu new module analytics

# With custom path
kimu new extension my-feature --path src/extensions/custom

# Force overwrite
kimu new extension my-feature --force

# Skip auto-registration
kimu new module analytics --no-register
```

## Project Information

```bash
# Basic project info
kimu info

# Detailed information
kimu info --verbose

# JSON output (for scripts)
kimu info --json
```

## Version Information

```bash
# CLI version
kimu --version

# Detailed version info
kimu version --verbose
```

## Help System

```bash
# General help
kimu --help

# Command-specific help
kimu create --help
kimu info --help
kimu version --help

# Help command
kimu help
kimu help create
```

## NPM Scripts (After Project Creation)

Once you've created a project with `kimu create`, use these npm scripts:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Generate dev build config
npm run generate-config:dev

# Generate production build config
npm run generate-config:prod
```

## Common Workflows

### 1. Start a New Project
```bash
# Create project
kimu create my-project --git

# Navigate to it
cd my-project

# Start development
npm run dev
```

### 2. Check Project Details
```bash
# Navigate to project
cd my-project

# View project information
kimu info --verbose
```

### 3. Build and Deploy
```bash
# Navigate to project
cd my-project

# Generate production config
npm run generate-config:prod

# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy dist/ folder to your hosting
```

### 4. Update KIMU CLI
```bash
# Check current version
kimu --version

# Update to latest
npm update -g kimu-cli

# Verify update
kimu --version
```

## Project Structure Reference

```
my-project/
├── src/
│   ├── core/              # KIMU framework core
│   ├── extensions/        # UI extensions
│   ├── modules/           # Modules (router, i18n)
│   └── main.ts            # Application entry
├── public/                # Static assets
├── scripts/               # Build scripts
├── dist/                  # Build output
├── kimu.config.json       # KIMU configuration
├── kimu-build-config.ts   # Build config (generated)
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── README.md              # Project docs
```

## Key Configuration Files

### kimu.config.json
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "kimuCore": "^0.4.0",
  "modules": {
    "installed": [],
    "registry": "https://github.com/unicoverso/kimu-modules"
  },
  "extensions": {
    "installed": ["app-root"],
    "main": "app-root"
  }
}
```

### package.json (key scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.ts"
  }
}
```

## Environment Variables

Create a `.env` file in your project root:

```bash
# Development
VITE_API_URL=http://localhost:3000
VITE_ENV=development

# Production
VITE_API_URL=https://api.myapp.com
VITE_ENV=production
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Troubleshooting

### Command not found: kimu
```bash
# Check npm global bin location
npm config get prefix

# Add to PATH (bash/zsh)
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Port already in use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
vite --port 3000
```

### Clean install
```bash
# Remove dependencies and build
rm -rf node_modules dist

# Reinstall
npm install

# Rebuild
npm run build
```

### Update dependencies
```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update kimu-core
```

## Tips and Tricks

### Faster npm installs
```bash
# Use npm ci for clean installs (faster)
npm ci

# Or use pnpm (faster alternative)
npm install -g pnpm
pnpm install
```

### Development mode with custom port
```bash
# Edit package.json
"dev": "vite --port 3000 --host"

# Or use CLI flag
npm run dev -- --port 3000
```

### Production build analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.ts for build stats
```

### Git workflow
```bash
# Initial commit (if created with --git)
git add .
git commit -m "Initial commit"

# Add remote and push
git remote add origin <your-repo-url>
git push -u origin main
```

## Next Steps

- **Documentation**: [Full Docs](../docs/index.md)
- **Getting Started**: [Complete Tutorial](getting-started.md)
- **Commands**: [Command Reference](command-kimu.md)
- **Examples**: [KIMU Examples](https://github.com/UnicoVerso/kimu-extensions-example)

---

Need more help? Check the [complete documentation](index.md) or [open an issue](https://github.com/UnicoVerso/kimu-cli/issues).
