# Task Execution Patterns

## Overview
Best practices for executing implementation tasks based on spec-driven development workflow.

## Task Execution Rules

### Sequential Execution
- **Always complete one task at a time**
- **Never automatically proceed to next task** without user confirmation
- **Update task status** before starting and after completing each task
- **Read all context documents** (requirements.md, design.md, tasks.md) before starting

### Subtask Handling
- **Start with subtasks first** when a task has subtasks
- **Complete all subtasks** before marking parent task complete
- **Optional subtasks** (marked with *) can be skipped if not required

### Code Implementation Priority
1. **Write all required code changes first**
2. **Test functionality** after implementation
3. **Fix any errors** before proceeding
4. **Verify against requirements** specified in task details

## Form Integration Workflow

### Step 1: Component Placement
```javascript
// 1. Import the component from funnel-0ps submodule
import { LeadCaptureForm } from '../../funnel-0ps'

// 2. Define constants at top of file
const apiEndpoint = 'https://your-api-endpoint.com/api'
const buttonText = 'Custom Button Text'
```

### Step 2: Replace Existing Forms
```javascript
// Replace mockup forms with functional forms
<div className="max-w-md mx-auto">
  <LeadCaptureForm apiEndpoint={apiEndpoint} buttonText={buttonText} />
</div>
```

### Step 3: Styling Adjustments
- Add container classes for proper alignment
- Ensure responsive behavior on all screen sizes
- Test form appearance on mobile and desktop

### Step 4: Verification
- Check for TypeScript/JavaScript errors
- Test form submission functionality
- Verify redirect behavior after successful submission

## Testing Guidelines
- **Limit verification attempts** to 2 tries maximum
- **Focus on core functionality** only
- **Don't over-test edge cases** during initial implementation
- **Use getDiagnostics tool** instead of bash commands for error checking

## Communication Pattern
- **Ask for user review** after completing each major task
- **Provide clear status updates** on what was accomplished
- **Explain any issues encountered** and how they were resolved
- **Confirm next steps** before proceeding to additional tasks