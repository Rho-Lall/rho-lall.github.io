# Component Props Pattern

## Overview
When passing props to React components, always define props as constants at the top of the file for maintainability and consistency.

## Pattern

### ✅ Preferred Pattern
```javascript
// API endpoint for form submissions
const apiEndpoint = 'https://your-api-endpoint.com/api'
const buttonText = 'Submit Form'

// Component usage
<MyComponent apiEndpoint={apiEndpoint} buttonText={buttonText} />
```

### ❌ Avoid This Pattern
```javascript
// Don't hardcode props inline
<MyComponent apiEndpoint="https://your-api-endpoint.com/api" buttonText="Submit Form" />
```

## Benefits
- **Single source of truth** - Change values in one place
- **Easy maintenance** - No need to find/replace across multiple locations
- **Consistent pattern** - All props follow the same structure
- **Better readability** - Constants are clearly defined at the top

## Implementation Rules
1. Define constants immediately after imports
2. Group related constants together
3. Use descriptive variable names
4. Follow camelCase naming convention
5. Add comments to explain the purpose

## Example from LeadCaptureForm Integration
```javascript
import { LeadCaptureForm } from '../../funnel-0ps'

// API endpoint for form submissions
const apiEndpoint = 'https://y1krjhl41m.execute-api.us-east-1.amazonaws.com/prod/leads'
const buttonText = 'Get started now!'

// Usage
<LeadCaptureForm apiEndpoint={apiEndpoint} buttonText={buttonText} />
```