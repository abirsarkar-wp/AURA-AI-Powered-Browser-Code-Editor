# Architecture

AURA is a Next.js App Router application that combines authenticated project storage with an in-browser development runtime. The browser owns the interactive IDE; the Next.js server owns authentication, database access, template serialization, and AI proxy routes.

```mermaid
flowchart LR
  U[Browser] --> N[Next.js App Router]
  N --> A[Auth.js]
  A --> O[GitHub / Google OAuth]
  N --> P[Prisma Client]
  P --> M[(MongoDB)]
  U --> W[WebContainer]
  W --> T[Starter template]
  W --> R[Dev server & iframe preview]
  U --> C[/api/chat and /api/code-completion]
  C --> L[Local Ollama: CodeLlama]
```

## Request and state flow

- `app/dashboard/page.tsx` uses dashboard server actions to list and manage the signed-in user's `Playground` records.
- `app/playground/[id]/page.tsx` coordinates the explorer, Monaco editor, save commands, preview pane, and AI controls.
- `modules/playground/hooks/usePlayground.tsx` first reads the persisted `TemplateFile`; when absent it requests `GET /api/template/[id]`, which serializes the selected directory from `vibecode-starters/`.
- `SaveUpdatedCode` upserts the complete file-tree JSON into MongoDB. File edits become persistent when a save operation runs; Ctrl+S is handled by the playground page.
- `modules/webcontainers/components/webcontainer-preview.tsx` mounts that tree into a WebContainer, runs `npm install`, chooses `dev`, `serve`, or `start` from the template's scripts, and renders the `server-ready` URL in an iframe.

## Important boundaries

WebContainer execution runs in the browser, not in the Next.js server process. The server does not execute user template code. The template API does read starter folders from the deployed application's filesystem, so those folders are required in every deployment.

The chat and completion API routes currently proxy to `http://localhost:11434/api/generate`. That makes them appropriate for local development with Ollama and CodeLlama; they need a reachable, deliberately deployed AI service before use on a hosted environment.
