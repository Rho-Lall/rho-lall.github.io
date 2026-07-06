# Gotcha: Parallel /sprint terminals sharing one working directory

## Symptom
Running two waves "in parallel" (e.g. Wave F and Wave G) as separate
Claude Code terminals, but both pointed at the same repo checkout, causes
one session's `git checkout {other-branch}` to switch the *other* session's
HEAD out from under it mid-task. Uncommitted tracked-file changes could be
lost; untracked files survive the switch but the wrong branch is checked
out until you notice.

## Fix
Give each wave its own `git worktree` (e.g. `git worktree add
../wave-f feature/wave-f-machine`) instead of sharing one working directory
across concurrent terminals. If already mid-sprint and you notice HEAD
changed underneath you, `git checkout {your-branch}` back and verify your
last commit is still there (`git log --oneline -3`) before continuing.
