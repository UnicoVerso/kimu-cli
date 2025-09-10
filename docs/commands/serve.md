# kimu serve

Serve the built KIMU project for testing and preview.

## Syntax
```bash
kimu serve [options]
```

## Options
- `--port <port>`: server port [default: 4000]
- `--host <host>`: server host [default: localhost]
- `--open`: automatically open browser
- `--dist <dir>`: directory to serve [default: dist]
- `--spa`: enable single-page application mode
- `--cors`: enable CORS headers
- `--verbose`: show detailed server logs

## Examples
```bash
# Serve built project with defaults
kimu serve

# Serve on specific port
kimu serve --port 8080

# Serve and open browser
kimu serve --open

# Serve custom directory
kimu serve --dist ./build

# Enable SPA mode for client-side routing
kimu serve --spa

# Enable CORS for API testing
kimu serve --cors

# Network access with custom host
kimu serve --host 0.0.0.0 --port 4000
```

## When to Use
Use `kimu serve` to:
- **Preview production builds** before deployment
- **Test built applications** locally
- **Share builds** with team members on local network
- **Validate build output** and asset loading
- **Debug production issues** in development environment

## Server Features
- **Static file serving**: Serves all built assets correctly
- **SPA support**: Handles client-side routing with fallback to index.html
- **CORS support**: Enables cross-origin requests for API testing
- **Gzip compression**: Automatically compresses responses
- **Cache headers**: Appropriate caching for static assets
- **MIME type detection**: Proper content types for all file types

## Difference from `kimu dev`
| Feature | `kimu dev` | `kimu serve` |
|---------|------------|--------------|
| Purpose | Development | Preview built app |
| Source | Live TypeScript compilation | Pre-built files |
| Hot Reload | ✅ Yes | ❌ No |
| Build Speed | Fast incremental | No building |
| Optimization | Development mode | Production ready |
| Use Case | Active development | Testing/Preview |

## Prerequisites
Before running `kimu serve`:
1. Build your project: `kimu build`
2. Ensure the dist directory exists and contains built files

## Network Sharing
To share with other devices:
```bash
kimu serve --host 0.0.0.0 --port 4000
```
Then access via `http://[your-ip]:4000`

## Notes
- Must have built the project first (`kimu build`)
- Serves static files only (no compilation)
- Ideal for production build testing
- Supports all modern web features (ES modules, service workers, etc.)
- Automatically handles asset paths and routing

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Static file server with SPA and production preview support
