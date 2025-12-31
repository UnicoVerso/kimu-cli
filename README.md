# KIMU-CLI

Official command-line interface for the KIMU framework ecosystem.

[![npm version](https://badge.fury.io/js/kimu-cli.svg)](https://badge.fury.io/js/kimu-cli)
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)

## Installation

### Global Installation (Recommended)

Install globally to use `kimu` command anywhere:

```bash
npm install -g kimu-cli
```

### Verify Installation

```bash
kimu --version
kimu --help
```

### Alternative: Use with npx

Run without installation:

```bash
npx kimu-cli create my-app
```

## Quick Start

Create a new KIMU application:

```bash
# Create a new project
kimu create my-app

# Navigate to project
cd my-app

# Start development server
npm run dev
```

Your application will be available at `http://localhost:5173/`

## Features

- 🚀 **Project Creation**: Create new KIMU applications from templates with `kimu create`
- 🎨 **Component Generation**: Extensible template-based system with `kimu new`
- 🔌 **Custom Generators**: Add new component types via JSON configuration
- 📦 **Module Management**: Install and manage modules from kimu-modules registry (mock, real registry coming soon)
- 🧩 **Extension Management**: Install and manage UI extensions (mock, real registry coming soon)
- 📋 **Package Discovery**: List and browse available modules and extensions
- 🔧 **Build Tools**: Build and serve KIMU applications with optimization (planned)
- 🔍 **Diagnostics**: Project health checks and compatibility validation (planned)

## Current Status

✅ **Available Commands:**
- `kimu create` - Create new KIMU projects from npm package
- `kimu new <type> <name>` - Generate components from templates (extension, module, etc.)
- `kimu new:list` - List all available component generators
- `kimu install module <name>` - Install KIMU modules (mock, real registry coming soon)
- `kimu install extension <name>` - Install KIMU extensions (mock, real registry coming soon)
- `kimu list modules/extensions/installed` - Browse and discover packages
- `kimu info` - Show project information
- `kimu version` - Show version information  
- `kimu help` - Command help system

⏳ **Planned Commands:**
- `kimu remove` - Package removal
- `kimu dev/build/serve` - Development workflow
- `kimu doctor` - Project diagnostics


## Author

**Marco Di Pasquale**  
Collettivo [UnicòVerso](https://unicoverso.org)  
Progetto [KIMU Framework](https://github.com/UnicoVerso/kimu)

Per la lista completa degli autori e collaboratori, vedi [AUTHORS.md](AUTHORS.md).

Per contatti, suggerimenti o collaborazioni: [GitHub @marcodipasquale](https://github.com/marcodipasquale)

## Contributions

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.  
If you use KIMU-CLI or want to improve it, open an issue or a pull request.

## References & Useful Links

- [KIMU Framework](https://github.com/UnicoVerso/kimu)
- [KIMU Core](https://github.com/UnicoVerso/kimu-core)
- [KIMU Modules](https://github.com/UnicoVerso/kimu-modules)
- [KIMU Extensions](https://github.com/UnicoVerso/kimu-extensions)
- [Documentation online](https://unicoverso.com/kimu/docs)
- [UnicòVerso](https://unicoverso.org)

- [📖 Complete Documentation Index](docs/index.md)
- [Intro to KIMU-CLI](docs/intro.md)
- [Command Reference: kimu](docs/command-kimu.md)
- [Distribution & Installation Guide](docs/distribution.md)


### Available Commands
- [Command: create](docs/commands/create.md)
- [Command: new](docs/commands/new.md) - **Extensible template-based generator system**
- [Command: install](docs/commands/install.md) ✅ - **Install modules and extensions**
- [Command: list](docs/commands/list.md) ✅ - **Browse and discover packages**
- [Command: info](docs/commands/info.md)
- [Command: help](docs/commands/help.md)
- [Command: version](docs/commands/version.md)

### Planned Commands
- [Command: remove](docs/commands/remove.md) ⏳
- [Command: list](docs/commands/list.md) ⏳
- [Command: build](docs/commands/build.md) ⏳
- [Command: dev](docs/commands/dev.md) ⏳
- [Command: serve](docs/commands/serve.md) ⏳
- [Command: doctor](docs/commands/doctor.md) ⏳

## Installation

### Global Installation (Recommended)
```bash
npm install -g kimu-cli
```

### Local Installation
```bash
npm install --save-dev kimu-cli
```

## Quick Start

### Create a New KIMU Project
```bash
# Create a basic KIMU application
kimu create my-app

# Create with git initialization
kimu create my-dashboard --git

# Create and force overwrite if directory exists
kimu create my-app --force
```

### Project Information
```bash
# Show project info
kimu info

# Show detailed information
kimu info --verbose

# JSON output for automation
kimu info --json
```

### Version Information
```bash
# Show CLI version
kimu version

# Show detailed version info
kimu version --verbose
```

### Get Help
```bash
# Show all available commands
kimu help

# Show help for specific command
kimu help create
kimu create --help
```

## Commands

### ✅ Available Commands
- `kimu create <name>` - Create a new KIMU project with basic structure
- `kimu new <type> <name>` - Generate components from templates (extension, module, etc.)
- `kimu new:list` - List all available component generators
- `kimu info` - Show information about the current KIMU project
- `kimu version` - Show KIMU-CLI version and system information
- `kimu help` - Show help for all commands or specific command

### ⏳ Planned Commands (Coming Soon)
- `kimu install <name>` - Install modules and extensions
- `kimu remove <name>` - Remove modules and extensions
- `kimu list [type]` - List available or installed packages
- `kimu dev` - Start development server with hot reload
- `kimu build` - Build project for production
- `kimu serve` - Serve built project for testing
- `kimu doctor` - Run project health diagnostics
- `kimu install module <name>` - Install a module
- `kimu remove <name>` - Remove a module or extension
- `kimu list modules` - List available modules
- `kimu list installed` - List installed packages

### Project Operations
- `kimu build` - Build the project
- `kimu dev` - Start development server
- `kimu serve` - Serve built project

### Information & Diagnostics
- `kimu info` - Show project information
- `kimu doctor` - Run diagnostics
- `kimu version` - Show version information

## Project Structure

```
my-kimu-app/
├── src/
│   ├── main.ts          # Application entry point
│   ├── app.ts           # Main application component
│   └── components/      # Custom components
├── public/              # Static assets
├── dist/                # Built files
├── package.json         # NPM configuration
├── kimu.config.json     # KIMU project configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Build configuration
```

## Configuration

### kimu.config.json
```json
{
  "name": "my-kimu-app",
  "version": "1.0.0",
  "kimuCore": "^1.0.0",
  "template": "basic",
  "modules": {
    "installed": ["router", "i18n"],
    "registry": "https://github.com/unicoverso/kimu-modules"
  },
  "extensions": {
    "installed": ["app-root"],
    "main": "app-root"
  }
}
```

## Development

### Requirements
- Node.js >= 18.0.0
- npm >= 8.0.0

### Local Development
```bash
git clone https://github.com/UnicoVerso/kimu-cli.git
cd kimu-cli
npm install
npm run build
npm link
```

### Testing
```bash
npm test                # Run tests
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage
```

### Code Quality
```bash
npm run lint           # Check code quality
npm run lint:fix       # Fix linting issues
npm run format         # Format code
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the Mozilla Public License 2.0 - see the [LICENSE](LICENSE) file for details.

## Links

- [KIMU Framework](https://github.com/UnicoVerso/kimu)
- [KIMU Core](https://github.com/UnicoVerso/kimu-core)
- [KIMU Modules](https://github.com/UnicoVerso/kimu-modules)
- [Documentation online](https://unicoverso.com/kimu/docs)

## Support

- 📖 [Documentation repository](https://github.com/UnicoVerso/kimu-docs)
- 🐛 [Issue Tracker](https://github.com/UnicoVerso/kimu-cli/issues)
- 💬 [Discussions](https://github.com/UnicoVerso/kimu-cli/discussions)
