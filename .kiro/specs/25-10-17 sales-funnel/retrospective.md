# Retrospective

## Phase 1

When I started this project, I thought I would spend the time spec out and design well upfront. And that would translate into the AI moving through the process quickly and independently. That was not the case.  That said it really was a team effort. Neither I, nor Kiro, could have completed this phase independently, at least not in the time that it took. 

The phase required a lot of refactoring, upgrading node, upgrading to Gatsby 5. We refractured the images. This took more time than planned for. It always does. Kiro did a lot of the heavy lifting to accomplish this background work.

I tried to build the sales page as a singular concept, a sales page. I provided a template. I provided examples. But Kiro didn't have a concept of what the DOM of a sales page should look like. .It was able to understand the parts of the whole, but we really did need to address it section by section.

Trying to dynamically pass yaml to a sales page frame proved to be harder than I thought. this might just boil down to a limitation of static site generation. But i will explore what we can do with GraphQL in a future phase. 

The takeaway, is this really is an assistant. It can't develop for me.

### What Worked Well
- **Static Gatsby Pages**: Successfully implemented squeeze and tripwire pages using static content
- **Gatsby 5 Upgrade**: Resolved Node.js v23.6.1 compatibility issues with `node:` protocol
- **Component Architecture**: Layout and styling integration worked smoothly with existing site

### Technical Challenges Encountered
- **YAML Integration**: Gatsby 5 MDX changes broke YAML-driven content rendering
- **Node.js Compatibility**: Gatsby 4 incompatible with modern Node.js versions
- **MDX Renderer Changes**: `MDXRenderer` deprecated in Gatsby 5, requires new approach
- **Build Dependencies**: Multiple dependency version conflicts during upgrade
- **Simplified MDX**: Temporarily disabled complex MDX rendering for blog posts

### Implementation Decisions
- **Static Content First**: Used hardcoded content objects instead of YAML for Phase 1
- **Gatsby 5 Migration**: Upgraded entire stack for modern Node.js support
- **Preserved YAML Files**: Kept YAML structure for future implementation