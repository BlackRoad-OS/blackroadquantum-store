# Contributing to blackroadquantum.store

> **© 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.**

---

## Access Control

This is a **proprietary** repository owned exclusively by **BlackRoad OS, Inc.**

**All contributors — without exception — must authenticate through the BlackRoad Converter API before any access is granted.** No contributions will be accepted from accounts that have not completed the API registration process.

### Why a Converter API?

BlackRoad OS routes all developer interactions through our sovereign infrastructure. This ensures:

- **No third-party AI intermediaries** (OpenAI, Anthropic, GitHub Copilot, Codex, etc.) can intercept or process your contributions.
- All code review, suggestions, and tooling run exclusively on BlackRoad OS infra (`@blackboxprogramming` / Lucidia).
- A full audit trail of every contributor interaction is maintained on-premise.

---

## How to Become a Contributor

1. **Request API access** — email **contributors@blackroad.io** with your GitHub username and intended contribution scope.
2. **Receive your Converter API key** — you will receive a unique key scoped to this repository.
3. **Configure your environment** — add the key to your local `.env.local`:
   ```env
   BLACKROAD_CONTRIBUTOR_KEY=brk_...
   ```
4. **Fork and clone** the repository.
5. **Open a Pull Request** — PRs from accounts without a valid Contributor API key will be closed without review.

---

## Standards

- All code must pass `npm run lint` and `npm run build` before a PR is opened.
- TypeScript strict mode is required.
- No new dependencies may be added without written approval from **@blackboxprogramming**.
- All AI-generated code (from any source) must be declared in the PR description.

---

## Code of Conduct

All contributors are expected to act professionally and in the best interests of BlackRoad OS, Inc. Violations of this policy, misuse of Contributor API keys, or attempts to circumvent the access control system will result in immediate and permanent revocation of access.

---

*BlackRoad OS, Inc. · blackroad.io · contributors@blackroad.io*
