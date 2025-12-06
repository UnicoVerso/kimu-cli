# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-01-XX

### Added
- **Template-Based Generator System**: Complete refactoring of `kimu new` command
- **Extensible Architecture**: Add new component types via JSON configuration without code changes
- **Generator Discovery**: Automatic detection of available generators in `templates/generators/`
- **Placeholder System**: Rich placeholder support ({{name}}, {{className}}, {{camelName}}, etc.)
- **`kimu new:list`**: New command to list all available component generators
- Template configurations for `extension` and `module` generators
- Comprehensive template files with examples and documentation

### Changed
- **Breaking**: Removed hardcoded component generation logic from `new` command
- Generators are now loaded dynamically from `templates/generators/` directory
- Improved error messages with suggestions to use `kimu new:list`
- Enhanced documentation for `kimu new` command with custom generator guide

### Fixed
- TypeScript type safety improvements in generator system
- Proper handling of nested configuration paths in registration

## [0.1.1] - 2025-01-13

### Fixed
- Fixed version command reading from package.json instead of hardcoded value
- Corrected CLI_VERSION constant to read dynamically

## [0.1.0] - 2025-01-13

### Added
- **`kimu create`**: Project scaffolding using npm package (kimu-core)
- **`kimu new`**: Component generation (extension and module)
- **`kimu version`**: Display CLI and project versions
- **`kimu info`**: Project diagnostics and information
- Published to npm as `kimu-cli`
- Comprehensive documentation suite
- Getting started guide and quick reference

### Features
- npm-based project creation (no git clone required)
- Automatic project configuration generation
- Extension and module generators
- Component registration in manifest files
- Colored CLI output and loading indicators

## [0.0.1] - 2025-09-02

### Added
- Initial release of KIMU-CLI (internal version)
- Basic project structure and configuration
- `version` command with detailed information
- `info` command for project diagnostics
- TypeScript support with strict configuration
- ESLint and Prettier configuration
- Jest testing framework setup
- Comprehensive logging utilities
- Type definitions for CLI operations
- Project template system foundation
- Registry integration architecture
- Build system configuration

### Features
- Command-line interface with commander.js
- Colored output with chalk
- Loading indicators with ora
- File system operations with fs-extra
- Project configuration management
- Error handling and logging
- Development workflow tools

### Development
- Complete TypeScript setup
- Testing infrastructure
- Code quality tools
- Documentation generation
- CI/CD foundation
