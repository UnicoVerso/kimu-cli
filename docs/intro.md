# Introduction to KIMU-CLI

KIMU-CLI is the official command-line tool for the KIMU framework ecosystem. It provides a unified interface to create, manage, build, and deploy KIMU projects with simple, intuitive commands.

## What is KIMU-CLI?

KIMU-CLI is designed to streamline the entire KIMU development workflow by providing:

- 🚀 **Project Scaffolding**: Create new KIMU applications from templates
- 📦 **Module Management**: Install, update, and remove modules from the registry
- 🧩 **Extension Management**: Manage UI extensions and components
- 🔧 **Build Pipeline**: Build, optimize, and bundle KIMU applications
- 🌐 **Development Server**: Fast development with hot module replacement
- 🔍 **Project Diagnostics**: Health checks and troubleshooting tools
- 📊 **Registry Integration**: Discover and explore the KIMU ecosystem

## Core Philosophy

KIMU-CLI follows these principles:
- **Developer Productivity**: Minimize setup time, maximize development efficiency
- **Modularity**: Support for the modular KIMU architecture
- **Simplicity**: Intuitive commands that work out of the box
- **Extensibility**: Plugin system for custom workflows
- **Community**: Integration with the broader KIMU ecosystem

## Command Categories

### Project Management
- `kimu create` - Create new KIMU projects
- `kimu new` - Create components from templates (extensions, modules)
- `kimu info` - Show project information and status
- `kimu doctor` - Run project health diagnostics

### Package Management  
- `kimu install` - Install modules and extensions
- `kimu remove` - Remove modules and extensions
- `kimu list` - Browse available and installed packages

### Development Workflow
- `kimu dev` - Start development server with hot reload
- `kimu build` - Build project for production
- `kimu serve` - Serve built project for testing

### Utilities
- `kimu version` - Show version information
- `kimu help` - Get help for any command

## Getting Started

### Installation

**Option 1: Global Installation (Recommended)**
```bash
npm install -g kimu-cli
```

**Option 2: Use with npx (No Installation)**
```bash
npx kimu-cli create my-first-app
```

**Verify Installation**
```bash
kimu --version
kimu --help
```

### Quick Start

1. **Create your first project**:
   ```bash
   kimu create my-first-app
   cd my-first-app
   ```

2. **Install dependencies** (if not done automatically):
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Your app will be available at `http://localhost:5173/`

4. **Build for production**:
   ```bash
   npm run build
   ```

## System Requirements

- **Node.js**: >= 18.0.0
- **NPM**: >= 8.0.0
- **Operating System**: macOS, Linux, Windows
- **Internet Connection**: Required for registry access

## Next Steps

- Read the [Command Reference](command-kimu.md) for detailed command usage
- Check out individual command documentation in the `commands/` directory
- See the [Distribution Guide](distribution.md) for installation and deployment
- Explore the [KIMU Framework](https://github.com/UnicoVerso/kimu) ecosystem

---

**Ready to build amazing web applications with KIMU? Let's get started!** 🚀
