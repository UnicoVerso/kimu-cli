# KIMU-CLI Documentation Index

Welcome to the complete documentation for KIMU-CLI, the official command-line interface for the KIMU framework ecosystem.

## 📖 Getting Started

### Essential Reading
- [Introduction to KIMU-CLI](intro.md) - Overview and core concepts
- [Distribution & Installation Guide](distribution.md) - Installation, building, and publishing
- [Command Reference](command-kimu.md) - Complete command overview and usage

## ⚡ Quick References

### Available Commands (Ready to Use)
| Command | Description | Documentation |
|---------|-------------|---------------|
| `create` | Create new KIMU projects | [📖 docs](commands/create.md) |
| `info` | Show project information | [📖 docs](commands/info.md) |
| `version` | Show version information | [📖 docs](commands/version.md) |
| `help` | Command help system | [📖 docs](commands/help.md) |

### Planned Commands (Coming Soon)
| Command | Description | Documentation |
|---------|-------------|---------------|
| `install` | Install modules and extensions | [📖 docs](commands/install.md) ⏳ |
| `remove` | Remove modules and extensions | [📖 docs](commands/remove.md) ⏳ |
| `list` | Browse available packages | [📖 docs](commands/list.md) ⏳ |
| `build` | Build for production | [📖 docs](commands/build.md) ⏳ |
| `dev` | Development server | [📖 docs](commands/dev.md) ⏳ |
| `serve` | Serve built project | [📖 docs](commands/serve.md) ⏳ |
| `doctor` | Project diagnostics | [📖 docs](commands/doctor.md) ⏳ |

## 🎯 Use Case Guides

### For New Users
1. **First Time Setup**: Start with [Introduction](intro.md) to understand KIMU-CLI
2. **Installation**: Follow the [Distribution Guide](distribution.md) for installation
3. **Create Your First Project**: Use [`kimu create`](commands/create.md)
4. **Learn the Commands**: Browse the [Command Reference](command-kimu.md)

### For Developers
1. **Project Setup**: Use [`kimu create`](commands/create.md) and [`kimu info`](commands/info.md)
2. **Development Workflow**: Plan ahead with [`kimu dev`](commands/dev.md) and [`kimu build`](commands/build.md) docs
3. **Package Management**: Understand future [`kimu install`](commands/install.md) and [`kimu list`](commands/list.md)
4. **Troubleshooting**: Prepare for [`kimu doctor`](commands/doctor.md) diagnostics

### For Maintainers
1. **Building and Distribution**: Follow [Distribution Guide](distribution.md)
2. **Command Implementation**: Study existing command patterns in `src/commands/`
3. **Documentation**: Keep docs in sync with implementation

## 📂 Documentation Structure

```
docs/
├── index.md                 # This file - documentation index
├── intro.md                 # Introduction and overview  
├── command-kimu.md         # Complete command reference
├── distribution.md         # Installation and distribution
└── commands/               # Individual command documentation
    ├── create.md           # ✅ Available
    ├── info.md             # ✅ Available  
    ├── version.md          # ✅ Available
    ├── help.md             # ✅ Available
    ├── install.md          # ⏳ Planned
    ├── remove.md           # ⏳ Planned
    ├── list.md             # ⏳ Planned
    ├── build.md            # ⏳ Planned
    ├── dev.md              # ⏳ Planned
    ├── serve.md            # ⏳ Planned
    └── doctor.md           # ⏳ Planned
```

## 🚀 Quick Start Examples

### Create and Setup New Project
```bash
# Install KIMU-CLI globally
npm install -g kimu-cli

# Create new project
kimu create my-awesome-app --git

# Navigate and check project
cd my-awesome-app
kimu info --verbose
```

### Get Help and Information
```bash
# Show all commands
kimu help

# Get specific command help
kimu create --help

# Check versions
kimu version --verbose
```

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
