# kimu dev

Start the development server for your KIMU project.

## Syntax
```bash
kimu dev [options]
```

## Options
- `--port <port>`: development server port [default: 3000]
- `--host <host>`: development server host [default: localhost]
- `--open`: automatically open browser
- `--no-open`: don't open browser automatically
- `--https`: use HTTPS (requires SSL setup)
- `--cors`: enable CORS for cross-origin requests
- `--verbose`: show detailed server logs

## Examples
```bash
# Start development server with defaults
kimu dev

# Start on specific port
kimu dev --port 8080

# Start and open browser automatically
kimu dev --open

# Start with HTTPS
kimu dev --https --port 443

# Start with custom host (for network access)
kimu dev --host 0.0.0.0 --port 3000

# Verbose logging
kimu dev --verbose
```

## Development Features
The development server provides:
- **Hot Module Replacement (HMR)**: Instant updates without page reload
- **Live Reload**: Automatic page refresh on file changes
- **Source Maps**: Full debugging support
- **Error Overlay**: In-browser error display
- **Module Resolution**: Automatic KIMU module and extension loading
- **Asset Serving**: Static file serving with proper MIME types
- **Proxy Support**: API proxying for backend integration

## File Watching
Automatically watches and reloads on changes to:
- Source files (`.ts`, `.js`, `.html`, `.css`)
- KIMU configuration (`kimu.config.json`)
- Package dependencies (`package.json`)
- Extension manifests (`extension-manifest.json`)

## Development Workflow
1. **Start server**: `kimu dev`
2. **Edit files**: Make changes to your project
3. **See updates**: Browser automatically reflects changes
4. **Debug**: Use browser dev tools with source maps
5. **Test**: Interactive development and testing

## Configuration
Development settings can be configured in:
- `kimu.config.json`: Project development preferences
- Command-line options (override config settings)
- Environment variables (for CI/CD)

## Network Access
To allow access from other devices on your network:
```bash
kimu dev --host 0.0.0.0 --port 3000
```
Then access via `http://[your-ip]:3000`

## Notes
- Must be run from within a KIMU project directory
- Requires all dependencies to be installed
- Automatically detects available ports if default is busy
- Supports both HTTP and HTTPS development
- Optimized for fast rebuild times

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Full development server with HMR and debugging support
