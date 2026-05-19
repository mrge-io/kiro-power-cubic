# Cubic AI Code Review - Kiro Power

An AWS Kiro Power that brings [Cubic's](https://cubic.dev) AI code review platform directly into your IDE.

## What it does

Access Cubic's AI code review capabilities without leaving Kiro:

- **PR Reviews** - Get AI feedback on pull requests before merging
- **Security Scans** - Find vulnerabilities and bugs across your entire repo
- **AI Wikis** - Auto-generated architecture docs and codebase overviews
- **Team Learnings** - Follow coding patterns from senior reviewers

## Quick Start

1. **Install this power** in Kiro or use it from the Kiro Powers marketplace.
2. **Sign in with Cubic** — on first use, Kiro opens a browser for Cubic OAuth. Approve access and you're connected. If the connection later expires or is revoked, reconnect from Kiro's MCP panel.

> Existing API-key (`cbk_`) configurations continue to work during the migration window, but new setups should use OAuth and should not include an `Authorization` header.

## Example Usage

Once installed, just ask Kiro naturally:

- "What did Cubic flag in PR #123?"
- "Are there any security issues in the latest scan?"
- "Show me the architecture from the Cubic wiki"
- "What coding patterns has the team learned?"

## Files

- `POWER.md` - Power definition and usage guide
- `mcp.json` - MCP server configuration for Cubic

## Requirements

- Active [Cubic](https://www.cubic.dev) account with access to at least one repository
- Membership in the Cubic installation for any repository whose data you want to access
- Repositories must have Cubic installed

## Links

- [Cubic Documentation](https://docs.cubic.dev)
- [Cubic MCP Server](https://docs.cubic.dev/ide/mcp-server)
- [Privacy Policy](https://www.cubic.dev/privacy)
- [Support](mailto:support@cubic.dev)

## License

MIT
