# Contributing to KIMU-CLI

We welcome contributions to KIMU-CLI! This document provides guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your changes
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/kimu-cli.git
cd kimu-cli

# Install dependencies
npm install

# Build the project
npm run build

# Link for local testing
npm link

# Verify installation
kimu --version
```

## Making Changes

### Project Structure

- `src/` - TypeScript source code
- `src/commands/` - CLI command implementations
- `src/utils/` - Utility functions and helpers
- `src/types/` - TypeScript type definitions
- `src/config/` - Configuration and constants
- `tests/` - Unit and integration tests
- `bin/` - CLI entry points
- `docs/` - Documentation

### Coding Standards

- Use TypeScript for all source code
- Follow the existing code style (ESLint + Prettier)
- Write comprehensive tests for new features
- Document all public APIs with TSDoc
- Use clear, descriptive commit messages

### Command Implementation Guidelines

When adding new commands, follow these patterns:

```typescript
// src/commands/new-command.ts
export function setupNewCommand(program: Command): void {
  program
    .command('new-command <arg>')
    .description('Description of the command')
    .option('-f, --flag', 'flag description')
    .action(async (arg: string, options: Options) => {
      const logger = new Logger(options.verbose);
      await handleNewCommand(arg, options, logger);
    });
}
```

### Error Handling

- Always implement proper error handling
- Use the Logger utility for consistent output
- Provide helpful error messages with suggestions
- Use appropriate exit codes

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix lint issues
npm run lint:fix

# Format code
npm run format
```

### Test Guidelines

- Write unit tests for all utility functions
- Write integration tests for command flows
- Mock external dependencies (file system, network)
- Test error conditions and edge cases
- Maintain 90%+ test coverage

## Pull Request Process

1. **Update Documentation**: Ensure README, CHANGELOG, and docs are updated
2. **Update Tests**: Add or update tests for your changes
3. **Run Quality Checks**: Ensure all tests pass and code is properly formatted
4. **Update Version**: Follow semantic versioning if needed
5. **Create Pull Request**: Provide a clear description of changes

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Changes generate no new warnings
```

## Release Process

### Semantic Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version: incompatible API changes
- **MINOR** version: backwards-compatible functionality
- **PATCH** version: backwards-compatible bug fixes

### Release Steps

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag: `git tag v1.0.0`
4. Push changes: `git push origin main --tags`
5. Publish to NPM: `npm publish`

### Pre-release Checklist

- [ ] All tests pass
- [ ] Documentation is up to date
- [ ] CHANGELOG is updated
- [ ] Version number follows semantic versioning
- [ ] No security vulnerabilities (`npm audit`)

## Development Workflow

### Branch Naming

- `feature/command-name` - New features
- `bugfix/issue-description` - Bug fixes
- `docs/section-name` - Documentation updates
- `refactor/component-name` - Code refactoring

### Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(commands): add create command with template support

Implements project creation with multiple templates including
basic, dashboard, and chat applications.

Closes #123
```

## Getting Help

- 📖 [Documentation](https://github.com/UnicoVerso/kimu-docs)
- 🐛 [Issue Tracker](https://github.com/UnicoVerso/kimu-cli/issues)
- 💬 [Discussions](https://github.com/UnicoVerso/kimu-cli/discussions)

## Recognition

Contributors will be recognized in:
- CHANGELOG.md
- README.md contributors section
- GitHub contributors page

Thank you for contributing to KIMU-CLI! 🎉
