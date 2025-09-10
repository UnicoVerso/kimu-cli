# kimu build

Build your KIMU project for production.

## Syntax
```bash
kimu build [options]
```

## Options
- `--mode <mode>`: build mode (development|production) [default: production]
- `--target <target>`: build target (es2020|es2022|esnext) [default: es2020]
- `--format <format>`: output format (esm|iife|umd) [default: esm]
- `--outdir <dir>`: output directory [default: dist]
- `--sourcemap`: generate source maps
- `--minify`: minify output
- `--watch`: watch for changes and rebuild
- `--clean`: clean output directory before build
- `--verbose`: show detailed build progress

## Examples
```bash
# Basic production build
kimu build

# Development build with source maps
kimu build --mode development --sourcemap

# Build with specific target and format
kimu build --target es2022 --format esm

# Build with custom output directory
kimu build --outdir ./dist/prod

# Watch mode for development
kimu build --watch --mode development

# Clean build with minification
kimu build --clean --minify

# Verbose build output
kimu build --verbose
```

## Build Process
The build command performs:
1. **Validation**: Checks project configuration and dependencies
2. **Compilation**: Compiles TypeScript to JavaScript
3. **Bundling**: Bundles modules and extensions
4. **Optimization**: Minifies and optimizes output (in production mode)
5. **Asset Processing**: Copies and processes static assets
6. **Output Generation**: Creates final build artifacts

## Build Outputs
- **JavaScript bundles**: Compiled and bundled application code
- **CSS files**: Processed and optimized stylesheets  
- **Static assets**: Images, fonts, and other resources
- **HTML files**: Generated HTML with proper asset references
- **Source maps**: For debugging (when enabled)
- **Manifest files**: Build metadata and asset mapping

## Configuration
Build settings can be configured in:
- `kimu.config.json`: Project-specific build settings
- `vite.config.ts` or `webpack.config.js`: Build tool configuration
- Command-line options (override config file settings)

## Notes
- Must be run from within a KIMU project directory
- Requires all dependencies to be installed (`npm install`)
- Output is optimized for production by default
- Supports modern build tools (Vite, Webpack)
- Automatically handles KIMU-Core integration

## Build Modes
- **Production**: Optimized for deployment (minified, tree-shaken)
- **Development**: Optimized for debugging (source maps, unminified)

## Status
⚠️ **This command is planned but not yet implemented**
- Current status: Command structure defined, implementation pending
- Target: Full build pipeline with optimization and bundling
