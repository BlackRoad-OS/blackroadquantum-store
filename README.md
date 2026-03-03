# blackroadquantum.store

> **© 2026 BlackRoad OS, Inc. — Proprietary. All rights reserved.**
> This software and all associated assets are the exclusive property of BlackRoad OS, Inc.
> Unauthorized use, reproduction, or distribution is strictly prohibited.
> See [LICENSE](./LICENSE) for full terms.

---

## Overview

[blackroadquantum.store](https://blackroadquantum.store) is the official enterprise licensing and product portal for **BlackRoad OS** — a sovereign, proprietary operating infrastructure built for quantum-scale deployments.

All traffic routes through **BlackRoad OS infrastructure only**. No third-party AI intermediaries (OpenAI, Anthropic, Codex, or similar) have access to this system. Contributor access is enforced via the BlackRoad Converter API (see [CONTRIBUTING.md](./CONTRIBUTING.md)).

---

## Products

| Product | Description | Price |
|---|---|---|
| **Enterprise License** | Full BlackRoad OS enterprise deployment, dedicated support, SLA, unlimited agents | $4,999 / yr |
| **Quantum API Access** | Programmatic access to all quantum endpoints, rate limits removed, SDK included | $999 / yr |
| **Developer Subscription** | Individual access — 5 repos, 2 domains, ∞ agent deployments | $149 / mo |

To purchase, visit [blackroadquantum.store](https://blackroadquantum.store) and click **Purchase** on your chosen plan.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16 (App Router)
- **Language**: TypeScript
- **Payments**: [Stripe](https://stripe.com)
- **Deployment**: Cloudflare Pages (auto-deployed via GitHub Actions)
- **Security**: CodeQL scanning on every push

---

## Environment Variables

Create a `.env.local` file at the project root:

```env
# Stripe
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE=price_...
NEXT_PUBLIC_STRIPE_PRICE_QUANTUM_API=price_...
NEXT_PUBLIC_STRIPE_PRICE_DEVELOPER=price_...

# Site
NEXT_PUBLIC_SITE_URL=https://blackroadquantum.store
```

> **Never commit secret keys.** `.env.local` is in `.gitignore`.

For CI/CD, set the following GitHub Actions secrets in the repository settings:

| Secret | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token for Pages deployment |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |
| `NEXT_PUBLIC_SITE_URL` | Production URL (`https://blackroadquantum.store`) |
| `DEPLOY_URL` | Health-check base URL |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Lint
npm run lint
```

---

## Deployment

Pushes to `main` automatically trigger the **Auto Deploy** GitHub Actions workflow, which:

1. Detects the service type (Next.js → Cloudflare Pages)
2. Builds and deploys via `wrangler`
3. Runs a health-check against `/api/health`
4. Rolls back if the health-check fails

---

## Security

Security vulnerabilities must be reported **privately** to **security@blackroad.io** — never via public GitHub issues. See [SECURITY.md](./SECURITY.md) for the full disclosure policy.

---

## Contributing

This is a **proprietary** repository. All contributors must obtain access through the BlackRoad Converter API before making any changes. See [CONTRIBUTING.md](./CONTRIBUTING.md).

---

*BlackRoad OS, Inc. · blackroad.io*
