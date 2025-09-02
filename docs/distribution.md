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

## Publishing and Distribution
- KIMU-CLI is published on npm as `kimu-cli`.
- To update or publish a new version, use:
  ```bash
  npm publish
  ```
- For binary packaging, see the CI/CD workflow in `.github/workflows/`.

## Notes
- Node.js >= 18 required
- For development, use `npm link` to test locally
- For CI/CD, see the provided GitHub Actions workflow

---
