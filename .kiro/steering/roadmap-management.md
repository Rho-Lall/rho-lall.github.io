---
inclusion: always
---

# Roadmap Management Guidelines

## When Completing Specifications

### **Moving Completed Items**
1. **Remove** completed spec from the "Active" section
2. **Add** completed spec to the "Completed" section using format: `✅ Spec Name - path/to/spec (YYYY-MM-DD)`
3. **Include completion date** in ISO format (YYYY-MM-DD) when moving items to Completed
4. **Never** mark items as complete while leaving them in Active sections

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
✅ Replace Mockup Form - components/active-form-deployment (2025-11-02)
```

### **Status Indicators**
- `✅` - Completed and deployed (with completion date)
- `🔄` - Currently being worked on (optional, for clarity)
- No indicator - Ready to implement

### **Completion Date Format**
- Use ISO date format: YYYY-MM-DD
- Add completion date when moving items from Active to Completed
- Date should reflect when the work was actually finished and deployed

This steering file ensures consistent roadmap management across all future specification work.