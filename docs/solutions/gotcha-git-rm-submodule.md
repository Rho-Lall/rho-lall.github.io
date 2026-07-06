# Gotcha: Removing a git submodule needs deinit first

## Symptom
`rm -rf path/to/submodule` leaves a dangling `.gitmodules` entry and stale
`.git/modules/path/to/submodule` config, even after `git rm`.

## Fix
Run `git submodule deinit -f -- <path>` before `git rm -r -f <path>`. The
deinit unregisters the submodule and clears its working tree; `git rm` then
also removes the (now-stale) `.gitmodules` section automatically.
