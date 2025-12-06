# Generator Templates

This folder contains template configurations for the `kimu new` command.

## Structure

Each generator type has its own folder:

```
generators/
├── extension/          # Extension generator
│   ├── config.json    # Generator configuration
│   └── templates/     # Template files
├── module/            # Module generator
│   ├── config.json
│   └── templates/
└── ... (other types)
```

## Adding a New Generator

1. Create a new folder with the generator name
2. Add `config.json` with generator configuration
3. Add template files in `templates/` subfolder
4. Templates support placeholders like `{{name}}`, `{{className}}`, etc.

## Configuration Schema

```json
{
  "name": "extension",
  "description": "Create a new UI extension",
  "targetPath": "src/extensions/{{name}}",
  "files": [
    {
      "name": "component.ts",
      "template": "component.ts.template"
    },
    {
      "name": "style.css",
      "template": "style.css.template"
    }
  ],
  "registration": {
    "file": "extension-manifest.json",
    "type": "array",
    "entry": {
      "tag": "{{kebabName}}",
      "name": "{{titleName}}",
      "version": "1.0.0"
    }
  },
  "postCreate": [
    "Edit {{targetPath}}/component.ts to add your logic",
    "Load it with extensionManager.load('{{name}}')"
  ]
}
```

## Template Placeholders

Available placeholders in templates and config:
- `{{name}}` - Original name (e.g., "my-feature")
- `{{className}}` - PascalCase class name (e.g., "MyFeature")
- `{{kebabName}}` - kebab-case name (e.g., "my-feature")
- `{{camelName}}` - camelCase name (e.g., "myFeature")
- `{{titleName}}` - Title Case name (e.g., "My Feature")
- `{{snakeName}}` - snake_case name (e.g., "my_feature")
- `{{targetPath}}` - Computed target path

## Notes

- Template files use `.template` extension
- Placeholders are replaced during generation
- Registration can be disabled with `--no-register` flag
- Custom paths can be specified with `--path` option
