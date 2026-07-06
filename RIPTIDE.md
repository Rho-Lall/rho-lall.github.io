# Riptide — Usage Guide

Riptide is a lean orchestration framework for directing multiple concurrent Claude Code agents through structured waves. One human, many terminals, zero chaos.

## Key Concepts

| Term | Definition |
|------|-----------|
| **Tide** | A milestone — collection of waves that run in parallel |
| **Wave** | A serial chain of dependent tasks in one Claude Code terminal |
| **Task** | Atomic unit of work (one issue) |
| **Agent** | Claude Code persona — Planner, Builder, Tester, or Debugger |

Waves within a tide run simultaneously with zero cross-wave dependencies. Dependencies only exist within a wave (serial task ordering). Tides are sequential milestones.

## Before You Start

1. **Create a Kiro spec** — use `.kiro/specs/{feature}/` with `requirements.md`, `design.md`, and `tasks.md`
2. **Include a MODULE_MAP in tasks.md** — assign file ownership per wave (prevents conflicts)
3. **Group tasks into tides and waves** — tides are milestones, waves are parallel lanes

Riptide reads architecture and task definitions directly from Kiro specs. No separate TECH_SPEC or MODULE_MAP files needed.

## Workflow

```
1. Kiro produces specs: requirements → design → tasks (with module map + sprint commands)
2. Open one Claude Code terminal per wave
3. In each terminal: /sprint TASK-1 TASK-2 TASK-3
4. Monitor progress via the dashboard
5. Review PRs when waves complete, merge, start next tide
```

## Commands (available in Claude Code terminals)

| Command | Purpose |
|---------|---------|
| `/plan {TASK-ID}` | Read-only research + structured plan output |
| `/build {TASK-ID}` | Implement from plan (TDD for logic, direct for declarative) |
| `/sprint {TASK-IDs}` | Batch process tasks in serial order within a wave |
| `/review` | Multi-perspective code review |
| `/compound` | Capture patterns/gotchas after task completion |

## Agent Context Order

When an agent starts work, it reads context in this order:

```
CLAUDE.md → .kiro/specs/*/design.md → .kiro/specs/*/tasks.md → docs/solutions/ → .riptide/plans/{task-id}.md
```

## Dashboard

Start the status dashboard from the project root:

```bash
riptide dashboard
```

Or directly:

```bash
open dashboard/index.html
```

The dashboard reads `.riptide/status.json` for real-time wave/task status.

## File Structure

```
CLAUDE.md                    # Agent rules (agents read this first)
RIPTIDE.md                   # This file — human usage guide
.claude/
├── agents/                  # Agent personas (Planner, Builder, Tester, Debugger)
├── commands/                # Slash commands (/plan, /build, /sprint, etc.)
├── hooks/                   # Safety hooks (kill switch, boundaries, git)
└── settings.json            # Hook registration
.kiro/specs/{feature}/       # Source of truth for architecture + tasks
├── requirements.md          # What to build
├── design.md                # How to build it (architecture, data model, APIs)
└── tasks.md                 # Implementation plan (tides, waves, module map)
.riptide/
├── status.json              # Live tide/wave/task status
└── plans/                   # Task plans (planner writes, builder reads)
dashboard/
└── index.html               # Single-file status dashboard
docs/
└── solutions/               # Knowledge compounding archive
```

## Safety Mechanisms

- **Kill Switch** — Auto-freeze on 3 consecutive test failures or 10+ minutes stuck
- **Module Boundaries** — Writing outside your wave's files triggers a freeze
- **Git Safety** — Blocks force push, reset --hard, clean -fd, protected branch deletion

On any freeze: all work stops, status updates to FROZEN, agent waits for human intervention.

## Status Flow

```
start → planning → building → reviewing → complete
                                         ↘ frozen (on safety trigger)
```

Agents update `.riptide/status.json` on every transition.

## Tips

- Keep waves independent — no cross-wave file dependencies
- One terminal = one wave = one serial task chain
- Check `docs/solutions/` before implementing (prior patterns live there)
- After completing a task, `/compound` captures what you learned
- The dashboard auto-refreshes — leave it open in a browser tab
