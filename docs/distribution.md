# Distributing and Installing KIMU-CLI

KIMU-CLI can be used as a global or local command-line tool.

## Global Installation (Recommended)
Install globally to use `kimu` from anywhere:
```bash
npm install -g kimu-cli
```

## Local Installation (Project Dev Dependency)
Install locally in your project:
```bash
npm install --save-dev kimu-cli
```

## Usage as a Command
After installation, you can run:
```bash
kimu --help
```

## Development: Using npm link
For local development and testing, you can link the CLI globally:
```bash
npm link
```
This makes the `kimu` command available globally on your machine for testing and development.

To remove the link:
```bash
npm unlink -g kimu-cli
```

## Build and Compilation
Before publishing or distributing, you need to compile the project:
```bash
npm run build      # Compile TypeScript to JavaScript
npm run lint       # Check code quality (optional)
npm run test       # Run tests (optional)
```

## Publishing and Distribution

### Test Package Creation
Before publishing, test the package creation:
```bash
npm pack          # Creates kimu-cli-X.X.X.tgz file
```

### Publishing to NPM
1. Login to npm (if not already logged in):
   ```bash
   npm login
   ```

2. Publish the package:
   ```bash
   npm publish
   ```

### Version Management
To update version and publish:
```bash
npm version patch    # Increment patch version (0.0.1 -> 0.0.2)
npm version minor    # Increment minor version (0.0.1 -> 0.1.0)
npm version major    # Increment major version (0.0.1 -> 1.0.0)
npm publish          # Publish the new version
```

### Automated Release Scripts
The project includes automated scripts:
```bash
npm run release     # Build and publish in one command
npm run package     # Build and create package file
```

## Installation Verification
After publishing, anyone can install and verify:
```bash
npm install -g kimu-cli  # Global installation
kimu --version           # Verify installation
kimu --help             # Test basic functionality
```

## Notes
- Node.js >= 18 required for development and usage
- Always run `npm run build` before publishing
- Use `npm link` for local development and testing
- The package includes all necessary files in `dist/`, `bin/`, and documentation
- For CI/CD automation, see the provided GitHub Actions workflow in `.github/workflows/`

---
