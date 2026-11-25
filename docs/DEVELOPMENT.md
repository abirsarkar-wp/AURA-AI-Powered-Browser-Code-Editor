# Development

## Requirements

- Node.js compatible with Next.js 15 and the checked-in npm lockfile
- MongoDB Atlas or another reachable MongoDB instance
- GitHub and/or Google OAuth apps
- Optional: Ollama with `codellama:latest` for AI functions

```bash
npm ci
copy .env.example .env
npx prisma generate
npx prisma db push
npm run dev
```

`npm run dev` starts Next.js with Turbopack. Do not commit `.env`, `node_modules`, `.next`, or `output`. Starter templates are source assets and must stay in `vibecode-starters/`.

The available root scripts are `dev`, `build`, `start`, and `lint`. The present `lint` script calls `next lint`; verify/update it before relying on it, because Next.js 15 no longer exposes that command in the same way as older releases.

## Templates

| Template | Directory | Startup selected by preview |
| --- | --- | --- |
| React + TypeScript | `vibecode-starters/react-ts` | `start` |
| Next.js | `vibecode-starters/nextjs-new` | `dev` |
| Express.js | `vibecode-starters/express-simple` | `start` |
| Vue | `vibecode-starters/vue` | `serve` |
| Hono | `vibecode-starters/hono-nodejs-starter` | `dev` |
| Angular | `vibecode-starters/angular` | `start` |

Selection is ordered `dev`, then `serve`, then `start`, matching `webcontainer-preview.tsx`.
