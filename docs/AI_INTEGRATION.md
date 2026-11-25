# AI integration

AURA contains two non-streaming AI pathways. Both call a local Ollama-compatible endpoint at `http://localhost:11434/api/generate` with `codellama:latest`; no API key environment variable is used by the current implementation.

| Path | Client | Behaviour |
| --- | --- | --- |
| Chat | `modules/ai-chat/components/ai-chat-sidebarpanel.tsx` | Sends a user message plus up to ten previous messages to `POST /api/chat`; the route prepends a coding-assistant system prompt. |
| Completion | `modules/playground/hooks/useAISuggestion.tsx` and `playground-editor.tsx` | Sends the active editor content, cursor position, filename, and suggestion type to `POST /api/code-completion`. The route extracts ±10 lines, detects basic language/framework patterns, builds a prompt, and returns insertion text. |

```mermaid
flowchart LR
  E[Active editor] --> K[Context extraction]
  K --> R[/api/code-completion]
  C[Chat sidebar] --> H[/api/chat]
  R --> O[Ollama CodeLlama]
  H --> O
  O --> R
  O --> H
```

Responses are JSON, not streamed. The completion route returns a fallback comment when its AI request fails. Chat returns a 500 response on provider failure. The UI has model-selection controls, but the server route currently fixes the provider model to CodeLlama, and chat history is browser state rather than `ChatMessage` persistence. Treat completion as implemented but verify it with a live Ollama instance before representing it as production-ready.
