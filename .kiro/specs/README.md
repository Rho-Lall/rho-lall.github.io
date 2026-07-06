# Specifications Organization

## Directory Structure

```
.kiro/specs/
├── architecture/     # System design, data flow, integration specs
├── components/       # UI components, pages, and functionality specs
├── deployment/       # CI/CD, build process, GitHub Pages specs
├── workflows/        # Development processes, code review, content creation
├── support/          # Bug fixes and troubleshooting (cross-cutting)
└── features/         # Legacy - being reorganized into above categories
```

## Category Definitions

### **Architecture**
System design, data models, integration patterns, overall structure

### **Components** 
UI components, pages, features, user-facing functionality

### **Deployment**
CI/CD pipelines, build processes, GitHub Pages setup, environment configuration

### **Workflows**
Development processes, code review procedures, testing workflows, content creation processes

### **Support**
Bug fixes, troubleshooting, maintenance tasks (cross-cutting category)

## Current Specs Status

### Active (Being Reorganized)
- `features/start/` → Moving to `architecture/` (repository documentation)
- `features/active-form-deployment/` → Moving to `components/` (form functionality)
- `support/mdx-rendering-fix/` → Staying in `support/` (bug fix)

### Completed
- `features/sales-funnel/` → Will archive after reorganization

## Spec Lifecycle

1. **Active Development** - Specs in appropriate category directory
2. **Completed** - Marked as complete in roadmap, kept for reference
3. **Reference** - Historical specs maintained for context and learning