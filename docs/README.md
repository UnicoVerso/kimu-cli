# KIMU-CLI Documentation

Welcome to the official documentation for KIMU-CLI, the command-line interface for the KIMU framework ecosystem.

## 🚀 Quick Links

### **New to KIMU-CLI?**
Start here: [**Getting Started Guide**](getting-started.md) ⭐

This comprehensive guide walks you through:
- Installing KIMU-CLI
- Creating your first project
- Understanding the project structure
- Making your first changes
- Building and deploying

### **Need Quick Reference?**
Common commands: [**Quick Reference**](quick-reference.md) 🚀

One-page guide with:
- Most used commands
- Common workflows
- Troubleshooting tips
- Configuration examples

### Documentation Index
- [**Documentation Index**](index.md) - Complete documentation map
- [**Introduction**](intro.md) - What is KIMU-CLI and why use it
- [**Command Reference**](command-kimu.md) - All available commands
- [**Distribution Guide**](distribution.md) - Advanced installation and publishing

## 📚 Available Commands

### ✅ Ready to Use
- [`kimu create`](commands/create.md) - Create new KIMU projects
- [`kimu new`](commands/new.md) - Create components from templates
- [`kimu info`](commands/info.md) - Show project information
- [`kimu version`](commands/version.md) - Display version information
- [`kimu help`](commands/help.md) - Get command help

### ⏳ Coming Soon
- [`kimu install`](commands/install.md) - Install modules and extensions
- [`kimu remove`](commands/remove.md) - Remove packages
- [`kimu list`](commands/list.md) - List available/installed packages
- [`kimu build`](commands/build.md) - Build for production
- [`kimu dev`](commands/dev.md) - Start development server
- [`kimu serve`](commands/serve.md) - Serve built project
- [`kimu doctor`](commands/doctor.md) - Project diagnostics

## 🎯 Quick Start

### Installation
```bash
# Global installation
npm install -g kimu-cli

# Or use with npx
npx kimu-cli create my-app
```

### Create a Project
```bash
# Create new project
kimu create my-awesome-app

# Navigate to it
cd my-awesome-app

# Start developing
npm run dev
```

### Get Help
```bash
# General help
kimu --help

# Command-specific help
kimu create --help

# Check version
kimu --version
```

## 📖 Documentation Structure

```
docs/
├── README.md              # This file
├── index.md               # Documentation index and navigation
├── getting-started.md     # Complete tutorial for beginners
├── intro.md               # Introduction to KIMU-CLI
├── command-kimu.md        # Complete command reference
├── distribution.md        # Installation and publishing guide
└── commands/              # Detailed command documentation
    ├── create.md
    ├── info.md
    ├── version.md
    ├── help.md
    └── ... (more commands)
```

## 🔗 External Resources

- **NPM Package**: [kimu-cli on npm](https://www.npmjs.com/package/kimu-cli)
- **GitHub Repository**: [UnicoVerso/kimu-cli](https://github.com/UnicoVerso/kimu-cli)
- **KIMU Core Framework**: [kimu-core on npm](https://www.npmjs.com/package/kimu-core)
- **KIMU Core Repo**: [UnicoVerso/kimu-core](https://github.com/UnicoVerso/kimu-core)

## 💡 Need Help?

- **Documentation**: You're reading it! Browse the links above
- **GitHub Issues**: [Report bugs or request features](https://github.com/UnicoVerso/kimu-cli/issues)
- **GitHub Discussions**: [Ask questions and share ideas](https://github.com/UnicoVerso/kimu-cli/discussions)

## 📝 Contributing to Documentation

Found an error or want to improve the docs? Contributions are welcome!

1. Fork the repository
2. Edit the markdown files in `/docs/`
3. Submit a pull request

---

**Ready to start building with KIMU?** Begin with the [Getting Started Guide](getting-started.md)! 🚀
