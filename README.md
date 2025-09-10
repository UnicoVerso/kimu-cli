# KIMU-CLI

Official command-line interface for the KIMU framework ecosystem.

## Features

- 🚀 **Project Creation**: Create new KIMU applications from templates with `kimu create`
- 📦 **Module Management**: Install and manage modules from kimu-modules registry (planned)
- 🧩 **Extension Management**: Install and manage UI extensions (planned)
- 🔧 **Build Tools**: Build and serve KIMU applications with optimization (planned)
- 🔍 **Diagnostics**: Project health checks and compatibility validation (planned)
- 🌐 **Ecosystem Integration**: Discover and explore KIMU packages (planned)

## Current Status

✅ **Available Commands:**
- `kimu create` - Create new KIMU projects
- `kimu info` - Show project information
- `kimu version` - Show version information  
- `kimu help` - Command help system

⏳ **Planned Commands:**
- `kimu install/remove` - Package management
- `kimu dev/build/serve` - Development workflow
- `kimu list` - Browse packages
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
- [Documentation](https://github.com/UnicoVerso/kimu-docs)
- [UnicòVerso](https://unicoverso.org)

- [📖 Complete Documentation Index](docs/index.md)
- [Intro to KIMU-CLI](docs/intro.md)
- [Command Reference: kimu](docs/command-kimu.md)
- [Distribution & Installation Guide](docs/distribution.md)

### Available Commands
- [Command: create](docs/commands/create.md)
- [Command: info](docs/commands/info.md)
- [Command: help](docs/commands/help.md)
- [Command: version](docs/commands/version.md)

### Planned Commands
- [Command: install](docs/commands/install.md) ⏳
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
    "installed": ["kimu-home"],
    "main": "kimu-home"
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
- [Documentation](https://github.com/UnicoVerso/kimu-docs)

## Support

- 📖 [Documentation](https://github.com/UnicoVerso/kimu-docs)
- 🐛 [Issue Tracker](https://github.com/UnicoVerso/kimu-cli/issues)
- 💬 [Discussions](https://github.com/UnicoVerso/kimu-cli/discussions)
