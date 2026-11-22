# Git workflow for daily pushes

Goal: small commits, pushed immediately, `main` always works.

## One-time setup

```bash
# Make sure commits count on your GitHub graph
git config user.name  "Your Name"
git config user.email "the-email-verified-on-your-GitHub-account"

# Shortcut: git ship "feat: message"  (stage all, commit, push)
git config --global alias.ship '!f() { git add -A && git commit -m "$1" && git push; }; f'
```
> `git ship` stages everything. Check `git status` first if you are unsure, and never remove `.env` from `.gitignore`.

## Daily ritual

```bash
git pull --rebase          # start of day
# ...do one small task...
git status                 # what changed?
git add -A
git commit -m "feat(backend): add signup endpoint"
git push                   # end of EVERY task
```

Aim for 3–6 commits a day. One task = one commit = one push.

## Commit message format

`type(scope): short summary` in present tense.

| type | use for |
|---|---|
| `feat` | new feature |
| `fix` | bug fix |
| `docs` | README, notes |
| `chore` | config, deps, cleanup |
| `refactor` | restructure, no behaviour change |
| `test` | tests |

Examples: `feat(auth): add login endpoint`, `fix(rides): reject invalid status transition`, `docs: add day 3 notes`.

## Mark each day

```bash
git tag day-03
git push --tags
```
Now you can show the project exactly as it was on any day.

## Optional: branch + PR days
For bigger days, use a branch and merge the same day (commits only show on your graph once merged to `main`):
```bash
git switch -c day-05-matching
# commit + push as usual:  git push -u origin day-05-matching
# open PR on GitHub, merge, then:
git switch main && git pull
```

## Mistakes and fixes

| Problem | Fix |
|---|---|
| Push rejected (remote has new commits) | `git pull --rebase` then `git push` |
| Committed with wrong message | `git commit --amend -m "new message"` (only if not yet pushed) |
| Need to undo a pushed commit | `git revert <commit-hash>` then push |
| Accidentally staged a file | `git restore --staged <file>` |
| **Committed a secret (`.env`, key)** | Rotate the secret immediately (new DB password, new JWT secret). Deleting the file is not enough, it stays in history. |

## Never commit
`.env`, `node_modules/`, `.next/`, database dumps, API keys. Commit `.env.example` with fake values instead.