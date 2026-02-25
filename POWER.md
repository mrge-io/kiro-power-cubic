```markdown
---
name: "cubic-code-review"
displayName: "Cubic AI Code Review"
description: "AI-powered code review platform for complex codebases. Access AI wikis, security scans, PR reviews, and team coding patterns directly in Kiro."
keywords: ["cubic", "code review", "ai review", "security scan", "pr review", "wiki", "documentation", "codebase", "bugs", "vulnerabilities", "learning", "coding patterns"]
---

# Cubic AI Code Review Power

Cubic is an AI-powered code review platform designed for complex codebases. This power gives you on-demand access to:

- **AI Wikis**: Auto-generated documentation, architecture diagrams, and codebase overviews
- **Security Scans**: Comprehensive vulnerability and bug detection across your entire repository
- **PR Reviews**: AI-generated code review feedback on pull requests
- **Team Learnings**: Captured patterns and preferences from senior reviewers

## Onboarding

### Step 1: Get Your Cubic API Key

1. Sign in to [cubic.dev](https://www.cubic.dev)
2. Navigate to **Settings → Integrations → MCP Configuration**
3. Generate a new API key (starts with `cbk_`)
4. Store it securely — you'll need it for authentication

## Usage

### Accessing AI Wikis

When you need architectural context or want to understand how a codebase works:

1. **List available wikis**: Ask "Show me wikis I can access in Cubic" or "What repositories have Cubic wikis?"
2. **Browse pages**: "List wiki pages for owner/repo"
3. **Read content**: "Get the architecture overview from owner/repo wiki"

**Example prompts**:
- "Show me the architecture diagram from the cubic wiki"
- "What does the authentication page say in the next.js wiki?"
- "Give me an overview of the repo structure"

### Reviewing Security Scans

To check for vulnerabilities, data integrity issues, or business logic bugs:

1. **List scans**: "Show me recent Cubic scans" or "List security scans for owner/repo"
2. **Get scan details**: "Show me high-severity issues from the latest scan"
3. **Investigate specific issues**: "Get details for issue ID abc123"

**Example prompts**:
- "Are there any security vulnerabilities in the latest scan?"
- "Show me all high-severity issues in src/auth/"
- "What SQL injection risks did Cubic find?"

### Checking PR Reviews

Before you commit or when reviewing code:

1. **Get PR issues**: "Show me Cubic's review of PR #123 in owner/repo"
2. **Filter by severity**: "What are the critical issues in this PR?"
3. **Address feedback**: Fix issues based on AI suggestions

**Example prompts**:
- "What did Cubic flag in PR #456?"
- "Show me unresolved issues in the latest PR"
- "Are there any security concerns in this PR?"

### Learning Team Patterns

To understand and follow your team's coding standards:

1. **List learnings**: "Show me coding patterns Cubic has learned for owner/repo"
2. **Get specific learning**: "What's the team pattern for error handling?"

**Example prompts**:
- "What coding standards has Cubic learned from our team?"
- "Show me patterns about API design"
- "How does the team prefer to handle authentication?"

## Workflows

### Pre-Commit Workflow

Before pushing code, verify it meets standards:

1. Check if there's a recent scan: `list_scans` for the repo
2. Review any high-severity issues in files you modified
3. Check team learnings for patterns you should follow
4. Read relevant wiki pages for architectural context

### PR Review Workflow

When reviewing or creating a PR:

1. Get AI review feedback: `get_pr_issues` for the PR number
2. Prioritize critical/high-severity issues
3. Cross-reference with team learnings to ensure consistency
4. Use wiki docs to verify architectural alignment

### Codebase Exploration

When exploring a new codebase:

1. Start with `list_wikis` to see what's available
2. Read the architecture overview and main docs pages
3. Check recent scans to understand code quality
4. Review learnings to understand team conventions

## Best Practices

- **Always specify owner and repo** in the format "owner/repo" (e.g., "vercel/next.js")
- **Use page references from `list_wiki_pages`** when calling `get_wiki_page`
- **Filter scans by severity** to focus on critical issues first
- **Check PR reviews early** in the development process to catch issues before they're merged
- **Leverage team learnings** to write code that matches your team's style from the start

## Troubleshooting

**"Access denied" errors**: Verify that:
- Your Cubic API key is valid
- You're a member of the GitHub installation for this repo
- Cubic has been installed and has access to the repository

**"No wiki found"**: The repository may not have a generated wiki yet. Cubic generates wikis for repositories where it's been installed and enabled.

**"No review found for PR"**: Cubic may not have reviewed this PR yet, or the PR number might be incorrect.

## Additional Resources

- [Cubic Documentation](https://docs.cubic.dev)
- [Cubic MCP Integration Guide](https://docs.cubic.dev/integrations/mcp)
- [Cubic CLI](https://www.npmjs.com/package/@cubic-dev-ai/cli) - Run reviews locally before pushing

## License and support

This power integrates with Cubic MCP Server (MIT).
- [Privacy Policy](https://www.cubic.dev/privacy)
- [Support](mailto:support@cubic.dev)

We handle your information as described in our [Privacy Notice](https://www.cubic.dev/privacy).
```
