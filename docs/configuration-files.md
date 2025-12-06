# Configuration Files

This directory contains various configuration files to ensure consistency across different development environments and tools.

## Files Overview

### `.editorconfig`
**Purpose**: Defines consistent coding styles across different editors and IDEs.

**Key settings**:
- Line endings: LF (Unix-style)
- Charset: UTF-8
- Indentation: 2 spaces
- Trim trailing whitespace
- Insert final newline

**Supported editors**: VSCode, IntelliJ IDEA, Sublime Text, Vim, Emacs, and many others with EditorConfig plugins.

### `.gitattributes`
**Purpose**: Git attributes for consistent line endings and file handling across different operating systems.

**Key features**:
- Enforces LF line endings for all text files
- Special handling for Windows-specific files (.bat, .cmd with CRLF)
- Binary file detection
- Linguist settings for GitHub language statistics
- Custom merge strategies for lock files

### `.prettierrc`
**Purpose**: Prettier code formatter configuration.

**Key settings**:
- Single quotes
- Semicolons enabled
- Line width: 80 characters
- Tab width: 2 spaces
- End of line: LF
- Arrow function parentheses: avoid
- Trailing commas: ES5 compatible

### `.prettierignore`
**Purpose**: Files and directories that Prettier should ignore.

**Ignored**:
- Build outputs (dist/, build/)
- Dependencies (node_modules/)
- Lock files
- Temporary files
- Generated files

### `.nvmrc`
**Purpose**: Specifies the Node.js version required for this project.

**Value**: `18` (Node.js 18.x)

**Usage**:
```bash
# If you have nvm installed
nvm use

# Or install the specified version
nvm install
```

## Why These Files Matter

### Consistency Across Environments
These files ensure that:
- **Line endings are consistent** (LF) regardless of OS (Windows, macOS, Linux)
- **Character encoding is UTF-8** everywhere
- **Code style is uniform** across team members
- **Git handles files correctly** across platforms

### Common Problems Prevented

1. **Line Ending Issues**
   - Without `.editorconfig` + `.gitattributes`: Windows uses CRLF, Unix uses LF
   - This causes: Git showing entire files as changed, merge conflicts, linter errors
   - **Solution**: Both files enforce LF for all text files

2. **Character Encoding Issues**
   - Without `.editorconfig`: Different default encodings (ISO-8859-1, Windows-1252, UTF-8)
   - This causes: Special characters broken, emoji not working, accented letters corrupted
   - **Solution**: UTF-8 everywhere

3. **Formatting Inconsistencies**
   - Without `.prettierrc`: Different tab/space settings, line lengths, quote styles
   - This causes: Merge conflicts, noisy diffs, readability issues
   - **Solution**: Automated consistent formatting

4. **Node Version Mismatches**
   - Without `.nvmrc`: Team members use different Node versions
   - This causes: "Works on my machine", package incompatibilities
   - **Solution**: Documented and enforceable Node version

## Setup Recommendations

### For VSCode Users
Install these extensions:
```json
{
  "recommendations": [
    "editorconfig.editorconfig",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}
```

### For Git Users
Ensure line endings are normalized:
```bash
# Check current setting
git config --global core.autocrlf

# Recommended settings:
# On Windows: git config --global core.autocrlf true
# On macOS/Linux: git config --global core.autocrlf input
```

### For Team Consistency
**Before first commit**:
```bash
# Install dependencies
npm install

# Format all files
npm run format

# Verify linting
npm run lint

# Build to verify everything works
npm run build
```

## Integration with CI/CD

These configurations work with our GitHub Actions workflows:
- Linting checks enforce `.prettierrc` rules
- Build process validates `.editorconfig` compliance
- Tests run on Node version specified in `.nvmrc`

## Troubleshooting

### Issue: "Delete ␍" errors in ESLint
**Cause**: CRLF line endings instead of LF

**Solution**:
```bash
# Fix with Prettier
npm run format

# Or manually convert line endings
git add --renormalize .
git commit -m "Normalize line endings"
```

### Issue: Files showing as modified after checkout
**Cause**: Git autocrlf settings conflict with repository settings

**Solution**:
```bash
# Re-normalize repository
git rm --cached -r .
git reset --hard
```

### Issue: Different formatting from team members
**Cause**: Editor not respecting `.editorconfig` or `.prettierrc`

**Solution**:
- Install EditorConfig plugin for your editor
- Install Prettier plugin and enable "Format on Save"
- Run `npm run format` before committing

## References

- [EditorConfig Documentation](https://editorconfig.org/)
- [Git Attributes Documentation](https://git-scm.com/docs/gitattributes)
- [Prettier Documentation](https://prettier.io/)
- [nvm Documentation](https://github.com/nvm-sh/nvm)

## Maintenance

These files should be:
- ✅ Committed to version control
- ✅ Kept in sync across all project repositories
- ✅ Updated when project conventions change
- ✅ Referenced in CONTRIBUTING.md

Last updated: December 2025
