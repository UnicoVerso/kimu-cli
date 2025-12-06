# KIMU-CLI Documentation Index

Welcome to the complete documentation for KIMU-CLI, the official command-line interface for the KIMU framework ecosystem.

## 📖 Getting Started

### Essential Reading
- [**Getting Started Guide**](getting-started.md) - ⭐ **Start here!** Complete installation and first project tutorial
- [**Quick Reference**](quick-reference.md) - 🚀 Common commands and workflows at a glance
- [Introduction to KIMU-CLI](intro.md) - Overview and core concepts
- [Distribution & Installation Guide](distribution.md) - Advanced installation, building, and publishing
- [Command Reference](command-kimu.md) - Complete command overview and usage

## ⚡ Quick References

### Available Commands (Ready to Use)
| Command | Description | Documentation |
|---------|-------------|---------------|
| `create` | Create new KIMU projects | [📖 docs](commands/create.md) |
| `new` | Create components from templates | [📖 docs](commands/new.md) |
| `install` | Install modules and extensions | [📖 docs](commands/install.md) ✅ |
| `list` | Browse and discover packages | [📖 docs](commands/list.md) ✅ |
| `info` | Show project information | [📖 docs](commands/info.md) |
| `version` | Show version information | [📖 docs](commands/version.md) |
| `help` | Command help system | [📖 docs](commands/help.md) |

### Planned Commands (Coming Soon)
| Command | Description | Documentation |
|---------|-------------|---------------|
| `remove` | Remove modules and extensions | [📖 docs](commands/remove.md) ⏳ |
| `build` | Build for production | [📖 docs](commands/build.md) ⏳ |
| `dev` | Development server | [📖 docs](commands/dev.md) ⏳ |
| `serve` | Serve built project | [📖 docs](commands/serve.md) ⏳ |
| `doctor` | Project diagnostics | [📖 docs](commands/doctor.md) ⏳ |

## 🎯 Use Case Guides

### For New Users
1. **First Time Setup**: Start with [**Getting Started Guide**](getting-started.md) ⭐
2. **Understand the Tool**: Read the [Introduction](intro.md) to understand KIMU-CLI
3. **Installation Methods**: Follow the [Distribution Guide](distribution.md) for advanced options
4. **Create Your First Project**: Use [`kimu create`](commands/create.md)
5. **Learn the Commands**: Browse the [Command Reference](command-kimu.md)

### For Developers
1. **Quick Start**: Follow [Getting Started](getting-started.md) for complete workflow
2. **Project Setup**: Use [`kimu create`](commands/create.md) and [`kimu info`](commands/info.md)
3. **Development**: Use `npm run dev` for hot reload development
4. **Building**: Use `npm run build` for production builds
5. **Package Management**: Future [`kimu install`](commands/install.md) and [`kimu list`](commands/list.md)

### For Maintainers
1. **Building and Distribution**: Follow [Distribution Guide](distribution.md)
2. **Command Implementation**: Study existing command patterns in `src/commands/`
3. **Documentation**: Keep docs in sync with implementation

## 📂 Documentation Structure

```
docs/
├── index.md                 # This file - documentation index
├── getting-started.md       # ⭐ Complete installation and tutorial
├── intro.md                 # Introduction and overview  
├── command-kimu.md         # Complete command reference
├── distribution.md         # Advanced installation and distribution
└── commands/               # Individual command documentation
    ├── create.md           # ✅ Available - Create new projects
    ├── info.md             # ✅ Available - Project information
    ├── version.md          # ✅ Available - Version information
    ├── help.md             # ✅ Available - Help system
    ├── install.md          # ⏳ Planned - Install modules/extensions
    ├── remove.md           # ⏳ Planned - Remove packages
    ├── list.md             # ⏳ Planned - List packages
    ├── build.md            # ⏳ Planned - Build for production
    ├── dev.md              # ⏳ Planned - Development server
    ├── serve.md            # ⏳ Planned - Serve built project
    └── doctor.md           # ⏳ Planned - Project diagnostics
```

## 🚀 Quick Start Examples

### Installation

**Global Installation (Recommended)**
```bash
npm install -g kimu-cli
```

**Using npx (No Installation)**
```bash
npx kimu-cli create my-awesome-app
```

### Create and Setup New Project
```bash
# Create new project
kimu create my-awesome-app --git

# Navigate to project
cd my-awesome-app

# Check project info
kimu info --verbose

# Start development server
npm run dev
```

### Get Help and Information
```bash
# Show all commands
kimu help

# Get specific command help
kimu create --help

# Check CLI version
kimu --version

# Detailed version info
kimu version --verbose
```

## 📦 NPM Package

- **Package**: [kimu-cli on npm](https://www.npmjs.com/package/kimu-cli)
- **Repository**: [GitHub - UnicoVerso/kimu-cli](https://github.com/UnicoVerso/kimu-cli)
- **Current Version**: Check with `kimu --version`
- **License**: MPL-2.0

## 🔄 Status Legend

- ✅ **Available**: Command is implemented and ready to use
- ⏳ **Planned**: Command is documented but not yet implemented
- 🚧 **In Progress**: Command is being developed
- ❌ **Deprecated**: Command is no longer supported

## 🤝 Contributing to Documentation

When contributing to KIMU-CLI documentation:

1. **Keep it current**: Update docs when implementation changes
2. **Use examples**: Include practical, working examples
3. **Follow patterns**: Match the style and structure of existing docs
4. **Test commands**: Verify examples work before documenting
5. **Update index**: Add new docs to this index file

## 📞 Support and Resources

- **GitHub Repository**: [KIMU-CLI](https://github.com/UnicoVerso/kimu-cli)
- **KIMU Framework**: [Main Project](https://github.com/UnicoVerso/kimu)
- **Community**: [UnicòVerso](https://unicoverso.org)
- **Issues**: [Bug Reports & Feature Requests](https://github.com/UnicoVerso/kimu-cli/issues)

---

**Ready to start building with KIMU-CLI?** Begin with the [Introduction](intro.md) and then dive into creating your first project with [`kimu create`](commands/create.md)! 🚀
