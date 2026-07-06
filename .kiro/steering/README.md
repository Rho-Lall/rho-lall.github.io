# Steering Files

## 🎯 What Steering Files Are

### Kiro's Implementation
- Files in `.kiro/steering/` that get automatically included in my context
- Can be set to `inclusion: always`, `inclusion: fileMatch`, or `inclusion: manual`
- Allow you to provide persistent instructions that carry across sessions
- Unique to the Kiro IDE environment

## 🔄 Similar Concepts Elsewhere

### Other AI Tools
- **Custom Instructions** (ChatGPT) - User-level preferences but not project-specific
- **System Prompts** (Claude, etc.) - Usually set by the platform, not user-customizable per project
- **Context Files** (Cursor, etc.) - Some IDEs have similar concepts but different implementations
- **.ai files** or **prompt templates** - Various tools have different approaches

### Traditional Development
- **`.editorconfig`** - Code formatting rules
- **`CONTRIBUTING.md`** - Project contribution guidelines
- **`.github/` templates** - Issue/PR templates
- **Documentation standards** - Usually in wikis or docs folders

## 💡 Why Kiro's Approach is Unique

1. **Automatic Context Injection** - No need to manually reference or remind
2. **Project-Specific** - Tied to the repository, not global settings
3. **Conditional Inclusion** - Can be triggered by file patterns or manual reference
4. **Persistent Across Sessions** - Survives beyond individual conversations

So steering files are definitely a Kiro innovation for managing AI assistant behavior in a project-specific, persistent way. Pretty clever solution to the "AI forgets project conventions" problem!

## Current Steering Files

- `roadmap-management.md` - Guidelines for updating the project roadmap when completing specifications