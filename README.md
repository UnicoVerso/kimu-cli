# KIMU-CLI

Official command-line interface for the KIMU framework ecosystem.

## Features

- 🚀 **Project Creation**: Create new KIMU applications from templates
- 📦 **Module Management**: Install and manage modules from kimu-modules registry
- 🧩 **Extension Management**: Install and manage UI extensions
- 🔧 **Build Tools**: Build and serve KIMU applications
- 🔍 **Diagnostics**: Project health checks and compatibility validation
- 🌐 **Ecosystem Integration**: Discover and explore KIMU packages


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

- [Intro to KIMU-CLI](docs/intro.md)
- [Command Reference: kimu](docs/command-kimu.md)
- [Distribution & Installation Guide](docs/distribution.md)

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

# Create with specific template
kimu create my-dashboard --template dashboard

# Interactive creation
kimu create
```

### Project Information
```bash
# Show project info
kimu info

# Show detailed information
kimu info --verbose

# JSON output
kimu info --json
```

### Version Information
```bash
# Show CLI version
kimu version

# Show detailed version info
kimu version --verbose
```

## Commands

### Project Creation
- `kimu create <name>` - Create a new KIMU project
- `kimu create <name> --template <template>` - Create with specific template

### Module Management
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
