# Moon Shadow Spa

This repository is the **source of truth** for the Moon Shadow Spa project. It contains a Vite + React frontend and a small Express server that serves the built site in production.

## Project Structure

| Path | Purpose |
| --- | --- |
| `client/` | Frontend application and page UI |
| `server/` | Production server entrypoint |
| `shared/` | Shared constants and utilities |
| `patches/` | Package patches used by the workspace |

## Local Setup

Install dependencies and start development:

```bash
pnpm install
pnpm dev
```

The development server runs with a host-enabled Vite setup suitable for browser preview.

## Quality Checks

Run type-checking and production build:

```bash
pnpm check
pnpm build
```

Start the production server locally after building:

```bash
pnpm start
```

## Environment Variables

Copy `.env.example` to `.env` and fill in only the values you actually need.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_ANALYTICS_ENDPOINT` | No | Base URL for the analytics script loader |
| `VITE_ANALYTICS_WEBSITE_ID` | No | Website ID used by the analytics script |
| `VITE_OAUTH_PORTAL_URL` | Only if OAuth is used | Frontend OAuth portal URL |
| `VITE_APP_ID` | Only if OAuth is used | Frontend app identifier |
| `VITE_FRONTEND_FORGE_API_URL` | Only if map proxy is used | Base URL for the frontend maps proxy |
| `VITE_FRONTEND_FORGE_API_KEY` | Only if map proxy is used | API key for the frontend maps proxy |
| `BUILT_IN_FORGE_API_URL` | Only for local storage proxy use | Backend storage proxy base URL |
| `BUILT_IN_FORGE_API_KEY` | Only for local storage proxy use | Backend storage proxy key |
| `PORT` | No | Production server port, default is `3000` |

## Deployment Guidance

This project builds into static frontend assets plus a small Node server. The recommended deployment flow is suitable for platforms that support Node.js services.

| Setting | Value |
| --- | --- |
| Install command | `pnpm install` |
| Build command | `pnpm build` |
| Start command | `pnpm start` |
| Runtime | Node.js |
| Default port | `3000` |

If analytics is not configured, the site still builds and runs normally because analytics loading is now optional.

## Git Workflow

Commit changes locally and push to the configured `main` branch of the GitHub repository when updates are ready.
