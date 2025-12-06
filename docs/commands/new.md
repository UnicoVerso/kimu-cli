# kimu new

Create a new component from template using the extensible template-based generator system.

## Synopsis

```bash
kimu new <type> <name> [options]
kimu new:list
```

## Description

The `kimu new` command provides an extensible template-based system for generating components in your KIMU project. Similar to Angular CLI's `ng generate`, it creates components with proper structure, files, and registration.

### Key Features

- **Template-Based System**: All generators are configured via JSON files in `templates/generators/`
- **Extensible**: Add new component types without modifying source code
- **Automatic Registration**: Components are registered in manifest/config files automatically
- **Placeholder Support**: Rich placeholder system for dynamic content generation
- **Discovery**: Automatically discovers all available generators

## Available Generators

Use `kimu new:list` to see all available component types:

```bash
$ kimu new:list

Available component generators:

  extension      Create a new KIMU extension with component, style, and view files
  module         Create a new KIMU module with service and documentation

Usage: kimu new <type> <name>
```

## Options

- `--path <path>` - Custom path for the component (overrides default from config)
- `--force` - Overwrite if component already exists
- `--no-register` - Skip registration in manifest/config files
- `--verbose` - Enable verbose output with detailed logging

## Usage Examples

### Create Extension

```bash
# Basic usage
kimu new extension my-dashboard

# With custom path
kimu new extension my-dashboard --path src/custom/extensions/dashboard

# Force overwrite existing
kimu new extension my-dashboard --force

# Skip registration
kimu new extension my-dashboard --no-register

# Verbose output
kimu new extension my-dashboard --verbose
```

**Generated structure:**
```
src/extensions/my-dashboard/
├── component.ts    # Component logic with lifecycle methods
├── style.css       # Component styles
└── view.html       # Component template
```

**Registration:**
- Automatically adds entry to `extension-manifest.json`

### Create Module

```bash
# Basic usage
kimu new module analytics

# With custom path
kimu new module analytics --path src/custom/modules/analytics

# Force overwrite existing
kimu new module analytics --force

# Skip registration
kimu new module analytics --no-register
```

**Generated structure:**
```
src/modules/analytics/
├── module.ts            # Module class
├── analytics-service.ts # Service implementation
└── README.md            # Module documentation
```

**Registration:**
- Automatically adds to `kimu.config.json` → `modules.installed` array

## Placeholder System

Templates use placeholders that are automatically replaced during generation:

| Placeholder | Description | Example (for "my-component") |
|-------------|-------------|------------------------------|
| `{{name}}` | Original kebab-case name | `my-component` |
| `{{className}}` | PascalCase name | `MyComponent` |
| `{{kebabName}}` | Kebab-case (same as name) | `my-component` |
| `{{camelName}}` | camelCase name | `myComponent` |
| `{{titleName}}` | Title Case name | `My Component` |
| `{{snakeName}}` | snake_case name | `my_component` |
| `{{targetPath}}` | Full target path | `src/extensions/my-component` |

## Creating Custom Generators

You can create your own generators by adding new folders in `templates/generators/`:

### 1. Create Generator Directory

```bash
templates/generators/
└── my-custom-type/
    ├── config.json
    └── templates/
        ├── file1.template
        └── file2.template
```

### 2. Define Configuration

Create `config.json`:

```json
{
  "name": "My Custom Type",
  "description": "Create a custom component type",
  "targetPath": "src/custom/{{name}}",
  "files": [
    {
      "template": "main.ts.template",
      "output": "{{name}}.ts"
    },
    {
      "template": "config.json.template",
      "output": "config.json"
    }
  ],
  "registration": {
    "enabled": true,
    "file": "custom-manifest.json",
    "type": "array",
    "entry": {
      "name": "{{name}}",
      "type": "custom",
      "version": "1.0.0"
    }
  },
  "postCreate": [
    "Edit {{targetPath}}/{{name}}.ts to implement your logic",
    "Configure options in {{targetPath}}/config.json"
  ]
}
```

### 3. Create Templates

Templates support full placeholder replacement:

```typescript
// templates/my-custom-type/templates/main.ts.template
export class {{className}} {
  constructor(private name: string = '{{name}}') {
    console.log('{{titleName}} created');
  }
  
  public greet(): string {
    return `Hello from ${this.name}`;
  }
}
```

### 4. Use Your Generator

```bash
kimu new my-custom-type my-example
```

Your generator will automatically appear in `kimu new:list`.

## Configuration Schema

### Generator Config Structure

```typescript
interface GeneratorConfig {
  name: string;              // Display name
  description: string;       // Brief description
  targetPath: string;        // Output path (supports placeholders)
  files: FileConfig[];       // Template files to process
  registration?: {           // Optional auto-registration
    enabled: boolean;
    file: string;           // Target config/manifest file
    type: 'array' | 'object';
    path?: string;          // Nested path for 'object' type
    entry?: any;            // Template for entry (supports placeholders)
  };
  postCreate?: string[];    // Instructions shown after creation
}

interface FileConfig {
  template: string;          // Template filename
  output: string;            // Output filename (supports placeholders)
}
```

## Validation Rules

### Component Name

- Must contain only lowercase letters, numbers, and hyphens
- Cannot start or end with a hyphen
- Pattern: `/^[a-z0-9-]+$/`

**Valid names:**
- `my-component`
- `user-dashboard`
- `analytics-v2`

**Invalid names:**
- `MyComponent` (uppercase)
- `my_component` (underscore)
- `-my-component` (starts with hyphen)
- `my-component-` (ends with hyphen)

### Project Detection

The command must be run from a KIMU project directory (directory containing `kimu.config.json`).

### Type Validation

Component type must be one of the discovered generators in `templates/generators/`.

## Exit Codes

- `0` - Success
- `1` - Error (invalid type, invalid name, not in KIMU project, template error)

## Advanced Examples

### Batch Creation with Script

```bash
#!/bin/bash
# Create multiple components

components=(
  "user-profile"
  "user-settings"
  "user-dashboard"
)

for component in "${components[@]}"; do
  kimu new extension "$component"
done
```

### Custom Path for Organization

```bash
# Organize by feature
kimu new extension user-profile --path src/features/user/profile
kimu new extension user-settings --path src/features/user/settings

# Organize by domain
kimu new module auth --path src/domains/authentication
kimu new module storage --path src/domains/persistence
```

### Template Inspection

```bash
# View generator configuration
cat templates/generators/extension/config.json

# View template content
cat templates/generators/extension/templates/component.ts.template
```

## Troubleshooting

### Templates Not Found

**Error:** `Templates directory not found`

**Solution:** Ensure you're running from a directory with `templates/generators/` or the CLI is properly installed.

### Generator Not Found

**Error:** `Invalid component type: my-type`

**Solution:** Run `kimu new:list` to see available generators. Check that `templates/generators/my-type/config.json` exists.

### Registration Failed

**Warning:** `Registration file not found: extension-manifest.json`

**Solution:** Create the registration file or use `--no-register` flag.

### Component Already Exists

**Error:** `Component already exists: src/extensions/my-component`

**Solution:** Use `--force` flag to overwrite or choose a different name.

## Related Commands

- [`kimu create`](create.md) - Create a new KIMU project
- [`kimu build`](build.md) - Build your KIMU project

## See Also

- [Quick Reference](../quick-reference.md)
- [Getting Started Guide](../getting-started.md)

Create new components from templates (extensions, modules, etc.) within a KIMU project.

## Syntax
```bash
kimu new <type> <name> [options]
```

## Arguments
- `<type>`: Type of component to create (required)
  - `extension` - Create a new UI extension
  - `module` - Create a new service module
- `<name>`: Name of the component (required, kebab-case recommended)

## Options
- `--path <path>`: Custom path for the component (default: auto-detected)
- `--force`: Overwrite if component already exists
- `--no-register`: Skip registration in manifest/config files
- `--verbose`: Enable verbose output

## Examples

### Create a New Extension
```bash
# Basic extension creation
kimu new extension my-feature

# With custom path
kimu new extension my-feature --path src/extensions/custom

# Force overwrite existing
kimu new extension my-feature --force

# Skip registration
kimu new extension my-feature --no-register
```

### Create a New Module
```bash
# Basic module creation
kimu new module analytics

# With custom path
kimu new module analytics --path src/modules/custom

# Force overwrite
kimu new module analytics --force
```

## What It Creates

### For Extensions (`kimu new extension <name>`)

Creates a complete extension structure:

```
src/extensions/<name>/
├── component.ts       # Extension logic and lifecycle
├── style.css          # Component styles
└── view.html          # HTML template
```

**component.ts** includes:
- `@KimuComponent` decorator with metadata
- `onInit()` lifecycle hook
- `getData()` for template binding
- `onRender()` for DOM manipulation
- `onDestroy()` for cleanup
- Event handlers example

**style.css** includes:
- Base component styles
- Responsive layout
- Button styles with hover effects

**view.html** includes:
- Template structure
- Data binding examples
- Interactive elements

**Auto-registration**:
- Adds entry to `extension-manifest.json`
- Ready to load with `extensionManager.load('<name>')`

### For Modules (`kimu new module <name>`)

Creates a complete module structure:

```
src/modules/<name>/
├── module.ts          # Module class
├── <name>-service.ts  # Service implementation
└── README.md          # Module documentation
```

**module.ts** includes:
- Extends `KimuModule`
- `getService()` method
- `init()` and `destroy()` lifecycle hooks

**<name>-service.ts** includes:
- Service class implementation
- Singleton instance export
- Example methods
- Initialization logic

**README.md** includes:
- Usage instructions
- API documentation
- Examples

**Auto-registration**:
- Adds to `kimu.config.json` modules list
- Ready to use in your application

## Component Naming Conventions

### Extension Names
- Use **kebab-case**: `my-feature`, `user-dashboard`
- Will generate:
  - Class name: `MyFeatureExtension`
  - HTML tag: `my-feature`
  - Path: `src/extensions/my-feature`

### Module Names
- Use **kebab-case**: `analytics`, `auth-service`
- Will generate:
  - Class name: `AnalyticsModule`, `AuthServiceModule`
  - Service name: `analyticsService`, `authServiceService`
  - Path: `src/modules/analytics`

## Generated Code Structure

### Extension Component Template
```typescript
import { KimuComponent } from '../../core/kimu-component';
import { KimuComponentElement } from '../../core/kimu-component-element';

@KimuComponent({
  tag: 'my-feature',
  name: 'My Feature',
  version: '1.0.0',
  description: 'Description for my-feature extension',
  author: 'Your Name',
  icon: '🎨',
  internal: false,
  path: 'my-feature',
  dependencies: []
})
export class MyFeatureExtension extends KimuComponentElement {
  async onInit(): Promise<void> {
    console.log('MyFeature extension initialized');
  }

  getData() {
    return {
      title: 'My Feature',
      message: 'Welcome to my-feature extension!'
    };
  }

  onRender(): void {
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    const button = this.$('#actionButton');
    if (button) {
      button.addEventListener('click', () => this.handleAction());
    }
  }

  private handleAction(): void {
    console.log('Action triggered');
  }

  onDestroy(): void {
    console.log('MyFeature extension destroyed');
  }
}
```

### Module Template
```typescript
import { KimuModule } from '../../core/kimu-module';
import { myFeatureService } from './my-feature-service';

export default class MyFeatureModule extends KimuModule {
  constructor(name = 'my-feature', version = '1.0.0', options?: any) {
    super(name, version, options);
  }

  getService() {
    return myFeatureService;
  }

  async init(): Promise<void> {
    console.log('MyFeatureModule initialized');
  }

  destroy(): void {
    console.log('MyFeatureModule destroyed');
  }
}
```

## Usage After Creation

### Using Your New Extension
```typescript
// In src/main.ts
import { KimuExtensionManager } from './core/kimu-extension-manager';

const extensionManager = KimuExtensionManager.getInstance();
await extensionManager.init();

// Load your extension
await extensionManager.load('my-feature');
```

### Using Your New Module
```typescript
// In src/main.ts
import MyFeatureModule from './modules/my-feature/module';

const myFeatureModule = new MyFeatureModule();
await myFeatureModule.init();

// Use the service
const service = myFeatureModule.getService();
service.doSomething({ data: 'value' });
```

## Requirements

- Must be run from the root of a KIMU project
- `kimu.config.json` must exist
- Component name must match pattern: `/^[a-z0-9-]+$/`

## Next Steps After Creation

### For Extensions
1. Edit `src/extensions/<name>/component.ts` to add your logic
2. Style your component in `src/extensions/<name>/style.css`
3. Update the template in `src/extensions/<name>/view.html`
4. Load it in your app with `extensionManager.load('<name>')`
5. Test in browser at `http://localhost:5173/`

### For Modules
1. Edit `src/modules/<name>/module.ts` to implement module logic
2. Create services in `src/modules/<name>/<name>-service.ts`
3. Add tests in `src/modules/<name>/<name>.test.ts`
4. Import and use in your application
5. Document API in the module's README.md

## Notes

- Component names must use lowercase letters, numbers, and hyphens only
- Extensions are automatically registered in `extension-manifest.json`
- Modules are automatically added to `kimu.config.json`
- Use `--no-register` to skip automatic registration
- Use `--force` to overwrite existing components (prompts by default)
- Generated code includes TypeScript types and JSDoc comments
- All templates follow KIMU framework best practices

## Tips

### Extension Development
- Keep extensions focused on a single feature
- Use dependencies for complex compositions
- Follow the KIMU component lifecycle
- Use `this.$()` for DOM queries within your extension
- Emit events for parent-child communication

### Module Development
- Export a singleton service instance
- Keep services stateless when possible
- Document your API with TypeScript types
- Add unit tests for all public methods
- Use async/await for asynchronous operations

## Troubleshooting

### "Not in a KIMU project directory"
Run the command from the root of a KIMU project where `kimu.config.json` exists.

### "Invalid component name"
Use only lowercase letters, numbers, and hyphens. Examples: `my-feature`, `user-auth`, `data-table`

### "Component already exists"
Use `--force` to overwrite, or choose a different name.

## See Also

- [Create Command](create.md) - Create new KIMU projects
- [Extension Development Guide](../getting-started.md#creating-extensions)
- [Module Development Guide](../intro.md#modules)
- [KIMU Component API](https://github.com/UnicoVerso/kimu-core)
