## Summary

This PR contains a set of non-breaking maintenance improvements:

- Make API base URL configurable via `VITE_API_BASE` (fallback kept)
- Export types from `src/services/api.ts` for consistent typing
- Centralize color tokens and replace hard-coded color literals
- Replace inline modal styles with styled-components
- Persist `cart` slice to localStorage (key: `efood:cart`)
- Add unit tests (Vitest) for cart persistence and purchase payload helper

## Checklist
- [ ] I ran the build locally and verified there are no type errors (tsc + vite build)
- [ ] New tests were added and are passing
- [ ] This is non-breaking and preserves existing UX/logic

## Notes for reviewer
- The branch name: `chore/colors-api-localstorage` contains all changes and has already been pushed.
- If you want, I can open the PR on GitHub or add reviewers — the repository currently has a remote branch and the PR URL is available when creating the PR via the GitHub UI.
