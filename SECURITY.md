# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in KIMU-CLI, please report it by emailing security@unicoverso.org.

**Please do not report security vulnerabilities through public GitHub issues.**

If you prefer, you can also report vulnerabilities using GitHub's security advisory feature:

1. Go to the KIMU-CLI repository
2. Click on "Security" tab
3. Click "Report a vulnerability"

## Security Best Practices

When using KIMU-CLI:

1. **Always validate user inputs** in custom templates and scripts
2. **Keep dependencies updated** using `npm audit` and `npm update`
3. **Use HTTPS** for all external registry communications
4. **Validate downloaded content** checksums when available
5. **Never execute arbitrary code** from external sources without user consent
6. **Use secure temporary directories** for downloads and builds
7. **Implement proper permission checks** for file operations

## Dependency Security

KIMU-CLI regularly audits its dependencies for security vulnerabilities. We recommend users:

- Run `npm audit` regularly in their projects
- Keep KIMU-CLI updated to the latest version
- Report any suspicious behavior or security concerns

## Response Timeline

- **Initial Response**: Within 24 hours
- **Status Update**: Within 48 hours
- **Resolution**: Severity-dependent (Critical: 7 days, High: 14 days, Medium: 30 days)

Thank you for helping keep KIMU-CLI and the KIMU ecosystem secure!
