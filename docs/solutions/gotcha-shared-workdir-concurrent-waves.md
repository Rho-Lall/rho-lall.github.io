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

If a foreign commit lands on your branch (the other session committed
while your branch happened to be checked out), don't `rebase -i`
(unsupported, interactive). Instead use non-interactive `git rebase --onto
<bad-commit>~1 <bad-commit> <your-branch>` to drop just that commit — but
first confirm its content already exists on the branch it actually belongs
to (`git merge-base --is-ancestor <bad-commit> <their-branch>`), so nothing
is lost.
