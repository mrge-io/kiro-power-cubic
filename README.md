# cubic AI Code Review - Kiro Power

An AWS Kiro Power that brings [cubic's](https://cubic.dev) AI code review platform directly into your IDE.

## What it does

Access cubic's AI code review capabilities without leaving Kiro:

- **PR Reviews** - Get AI feedback on pull requests before merging
- **Security Scans** - Find vulnerabilities and bugs across your entire repo
- **AI Wikis** - Auto-generated architecture docs and codebase overviews
- **Team Learnings** - Follow coding patterns from senior reviewers

## Quick Start

1. **Get a cubic API key** at [cubic.dev](https://www.cubic.dev) → Settings → Integrations → MCP
2. **Set your environment variable**: `export CUBIC_API_KEY="cbk_your_key"`
3. **Install this power** in Kiro or use it from the Kiro Powers marketplace

## Example Usage

Once installed, just ask Kiro naturally:

- "What did cubic flag in PR #123?"
- "Are there any security issues in the latest scan?"
- "Show me the architecture from the cubic wiki"
- "What coding patterns has the team learned?"

## Files

- `POWER.md` - Power definition and usage guide
- `mcp.json` - MCP server configuration for cubic

## Requirements

- Active [cubic](https://www.cubic.dev) account
- cubic API key
- Repositories must have cubic installed

## Links

- [cubic Documentation](https://docs.cubic.dev)
- [cubic MCP Integration](https://docs.cubic.dev/integrations/mcp)
- [Privacy Policy](https://www.cubic.dev/privacy)
- [Support](mailto:support@cubic.dev)

## License

MIT
