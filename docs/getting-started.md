# Getting Started with KIMU-CLI

This guide will help you install KIMU-CLI and create your first KIMU application in just a few minutes.

## Prerequisites

Before you begin, ensure you have:
- **Node.js** >= 18.0.0 ([Download here](https://nodejs.org/))
- **NPM** >= 8.0.0 (comes with Node.js)
- A terminal/command prompt

Check your versions:
```bash
node --version
npm --version
```

## Installation

### Option 1: Global Installation (Recommended)

Install KIMU-CLI globally to use the `kimu` command anywhere:

```bash
npm install -g kimu-cli
```

Verify the installation:
```bash
kimu --version
# Output: 0.1.1 (or current version)

kimu --help
# Shows all available commands
```

### Option 2: Using npx (No Installation Required)

You can use KIMU-CLI without installing it globally by using `npx`:

```bash
npx kimu-cli create my-app
```

This downloads and runs the latest version of KIMU-CLI temporarily.

## Creating Your First Project

### Step 1: Create a New Project

```bash
kimu create my-first-app
```

You'll be prompted to:
- Confirm the project name
- Choose whether to initialize git
- Optionally select a template (coming soon)

The CLI will:
1. Create a new folder `my-first-app/`
2. Initialize npm with `package.json`
3. Install `kimu-core` and copy all framework files
4. Install all dependencies
5. Generate configuration files

### Step 2: Navigate to Your Project

```bash
cd my-first-app
```

### Step 3: Explore Your Project Structure

```
my-first-app/
├── src/                    # Source code
│   ├── core/              # KIMU core framework files
│   ├── extensions/        # Your custom extensions
│   ├── modules/           # Modules (router, i18n, etc.)
│   └── main.ts            # Application entry point
├── public/                # Static assets
├── scripts/               # Build and utility scripts
├── dist/                  # Build output
├── kimu.config.json       # KIMU configuration
├── kimu-build-config.ts   # Build configuration
├── package.json           # NPM dependencies
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite bundler configuration
└── README.md              # Project documentation
```

### Step 4: Start Development Server

```bash
npm run dev
```

This will:
- Start the Vite development server
- Enable hot module replacement (HMR)
- Open your app at `http://localhost:5173/`

You should see your KIMU application running! 🎉

### Step 5: Make Your First Change

Open `src/extensions/app-root/component.ts` and modify the `getData()` method:

```typescript
getData() {
  return {
    title: 'My First KIMU App!', // Change this
    version: this.version,
    kimuLogo: this.getKimuLogo(),
  };
}
```

Save the file and watch the browser update automatically!

## Understanding Key Files

### `src/main.ts`
The main entry point that initializes the KIMU application:
```typescript
import { KimuApp } from './core/kimu-app';
import { KimuExtensionManager } from './core/kimu-extension-manager';

async function main() {
  const app = await KimuApp.getInstance();
  const extensionManager = KimuExtensionManager.getInstance();
  
  await extensionManager.init();
  await extensionManager.load('app-root');
}
```

### `kimu.config.json`
Project configuration file:
```json
{
  "name": "my-first-app",
  "version": "1.0.0",
  "kimuCore": "^0.4.0",
  "modules": {
    "installed": [],
    "registry": "https://github.com/unicoverso/kimu-modules"
  },
  "extensions": {
    "installed": ["app-root"],
    "main": "app-root"
  }
}
```

### `package.json`
NPM package configuration with scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src/**/*.ts",
    "generate-config:dev": "node scripts/generate-build-config.js dev",
    "generate-config:prod": "node scripts/generate-build-config.js prod"
  }
}
```

## Development Commands

### Start Development Server
```bash
npm run dev
```
- Hot reload enabled
- Access at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```
- Optimized production bundle
- Output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
- Test production build locally

### Lint Your Code
```bash
npm run lint
```
- Check code quality with ESLint

## KIMU-CLI Commands

### Get Project Information
```bash
kimu info
```
Shows basic project details.

```bash
kimu info --verbose
```
Shows detailed information including dependencies and configuration.

### Check CLI Version
```bash
kimu --version
```
Shows KIMU-CLI version.

```bash
kimu version --verbose
```
Shows detailed version information including Node.js and platform.

### Get Help
```bash
kimu --help
```
Shows all available commands.

```bash
kimu create --help
```
Shows help for a specific command.

## Creating Extensions

KIMU applications are built using extensions. Here's how to create your first extension:

### Using the CLI (Recommended)

The easiest way is to use the `kimu new` command:

```bash
# Create a new extension
kimu new extension my-first-extension
```

This automatically creates:
- `component.ts` - Logic and lifecycle methods
- `style.css` - Component styles
- `view.html` - HTML template
- Registers in `extension-manifest.json`

### Manual Creation

Alternatively, create the structure manually:

### 1. Create Extension Folder
```bash
mkdir -p src/extensions/my-first-extension
```

### 2. Create Required Files
Each extension needs three files:
- `component.ts` - Logic and data
- `style.css` - Styles
- `view.html` - Template

Example `component.ts`:
```typescript
import { KimuComponent } from '../../core/kimu-component';
import { KimuComponentElement } from '../../core/kimu-component-element';

@KimuComponent({
  tag: 'my-first-extension',
  name: 'My First Extension',
  version: '1.0.0',
  description: 'My first KIMU extension',
  author: 'Your Name',
  icon: '🎨',
  internal: false,
  path: 'my-first-extension',
  dependencies: []
})
export class MyFirstExtension extends KimuComponentElement {
  async onInit() {
    console.log('Extension initialized!');
  }

  getData() {
    return {
      message: 'Hello from my first extension!'
    };
  }
}
```

Example `view.html`:
```html
<div class="extension-container">
  <h1>${message}</h1>
</div>
```

Example `style.css`:
```css
.extension-container {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}
```

### 3. Register Your Extension

Add to `extension-manifest.json`:
```json
{
  "tag": "my-first-extension",
  "name": "My First Extension",
  "version": "1.0.0",
  "description": "My first KIMU extension",
  "author": "Your Name",
  "icon": "🎨",
  "internal": false,
  "path": "my-first-extension",
  "dependencies": []
}
```

### 4. Load Your Extension

In `src/main.ts`:
```typescript
await extensionManager.load('my-first-extension');
```

## Next Steps

- **Read the Documentation**: Explore the [full command reference](command-kimu.md)
- **Learn About Extensions**: Check the [KIMU-Core documentation](https://github.com/UnicoVerso/kimu-core)
- **Join the Community**: Visit the [KIMU GitHub](https://github.com/UnicoVerso)
- **Explore Examples**: Check out [example projects](https://github.com/UnicoVerso/kimu-extensions-example)

## Troubleshooting

### "Command not found: kimu"
If you get this error after global installation:
```bash
# Check if npm global bin is in PATH
npm config get prefix

# Add to PATH (example for bash/zsh)
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Port 5173 Already in Use
If the dev server fails to start:
```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
vite --port 3000
```

### Build Errors
If you encounter build errors:
```bash
# Clean and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## Support

- **Issues**: [GitHub Issues](https://github.com/UnicoVerso/kimu-cli/issues)
- **Discussions**: [GitHub Discussions](https://github.com/UnicoVerso/kimu-cli/discussions)
- **Documentation**: [Full Docs](https://github.com/UnicoVerso/kimu-cli/docs)

---

**Happy coding with KIMU!** 🚀
