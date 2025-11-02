---
inclusion: always
---

# Roadmap Management Guidelines

## When Completing Specifications

### **Moving Completed Items**
1. **Remove** completed spec from the "Active" section
2. **Add** completed spec to the "Completed" section using format: `✅ Spec Name - path/to/spec`
3. **Never** mark items as complete while leaving them in Active sections

### **Roadmap Structure**
- Keep Active sections organized by category (Architecture, Components, Deployment, Workflows, Support)
- Mark empty categories as "(empty)" rather than removing the category headers
- Maintain consistent formatting with checkboxes at the beginning: `✅ Item Name - path`

### **Example Correct Flow**
**Before completion:**
```
## Active
##### Components
- Replace Mockup Form - components/active-form-deployment
```

**After completion:**
```
## Active
##### Components
(empty)

## Completed
✅ Replace Mockup Form - components/active-form-deployment
```

### **Status Indicators**
- `✅` - Completed and deployed
- `🔄` - Currently being worked on (optional, for clarity)
- No indicator - Ready to implement

This steering file ensures consistent roadmap management across all future specification work.